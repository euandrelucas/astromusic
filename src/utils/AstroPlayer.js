const {client} = require('../../bot.js')
const Discord = require('discord.js')
const c = require('colors')

console.log(c.green('[PLAYER] - Player Carregado'))

client.player.on('trackStart', (message, track) => message.channel.send(`🎵  ›  Now playing \`${track.title}\``))

client.player.on('trackAdd', (message, queue, track) => 
message.channel.send(`▶️  ›  \`${track.title}\` has been added to the queue!`)
)
client.player.on('playlistAdd', (message, queue, playlist) => 
message.channel.send(`▶️  ›  \`${playlist.title}\` has been added to the queue \`(${playlist.tracks.length} songs)\`!`)
)


client.player.on('searchResults', (message, query, tracks) => {

    const embed = new Discord.MessageEmbed()
    .setTitle(`🔍  ›  Here are your search results for ${query}!`)
    .setDescription(tracks.map((t, i) => `**${eval(i + 1)}・**${t.title}`))
    .setFooter('Send the number of the song you want to play!')
    .setColor('611EE8')
    .setThumbnail(client.user.displayAvatarURL({dynamic:true}))
    message.channel.send(embed);

})
client.player.on('searchInvalidResponse', (message, query, tracks, content, collector) => {

    if (content === 'cancel') {
        collector.stop()
        return message.channel.send('<:dlz_error:795203031388913687>  ›  Search cancelled!')
    }

    message.channel.send(`<:dlz_error:795203031388913687>  ›  You must send a valid number between 1 and ${tracks.length}!`)

})

client.player.on('searchCancel', (message, query, tracks) => 
message.channel.send('<:dlz_error:795203031388913687>  ›  You did not provide a valid response... Please send the command again!')
)

client.player.on('noResults', (message, query) => 
message.channel.send(`<:dlz_error:795203031388913687>  ›  No results found on YouTube for \`${query}\`!`)
)

client.player.on('queueEnd', (message, queue) => 
message.channel.send('<:dlz_error:795203031388913687>  ›  Music stopped as there is no more music in the queue!')
)

client.player.on('channelEmpty', (message, queue) => 
message.channel.send('<:dlz_error:795203031388913687>  ›  Music stopped as there is no more member in the voice channel!')
)

client.player.on('botDisconnect', (message) => 
message.channel.send('<:dlz_error:795203031388913687>  ›  Music stopped as I have been disconnected from the channel!')
)

// Error handling
client.player.on('error', (error, message) => {
    switch(error){
        case 'NotPlaying':
            message.channel.send('<:dlz_error:795203031388913687>  ›  There is no music being played on this server!')
            break;
        case 'NotConnected':
            message.channel.send('<:dlz_error:795203031388913687>  ›  You are not connected in any voice channel!')
            break;
        case 'UnableToJoin':
            message.channel.send('<:dlz_error:795203031388913687>  ›  I am not able to join your voice channel, please check my permissions!')
            break;
        case 'LiveVideo':
            message.channel.send('<:dlz_error:795203031388913687>  ›  YouTube lives are not supported!')
            break;
        default:
            message.channel.send(`<:dlz_error:795203031388913687>  ›  Something went wrong... Error:\n\`\`\`js\n${error}\n\`\`\``)
    }
})