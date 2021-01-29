const Discord = require('discord.js')

exports.run = async (client, message, args, prefix) => {

    if(!args[0]) return message.channel.send(`<:dlz_error:795203031388913687>  ›  I need you to give me some argument!`)

    if((args[0]) > 200 || (args[0]) < 0 || isNaN(args[0])) return message.channel.send(`<:dlz_error:795203031388913687>  ›  I need you to give me a valid number between \`0 / 200\``)

    client.player.setVolume(message, args[0]);
    
    if(!message.member.voice.channel) return;

    if(!message.guild.me.voice.channel) return;

    message.channel.send(`🔊  ›  ${message.author} volume successfully changed!`)
}

exports.help = {
    name: 'volume',
    aliases: ['setvol', 'vol'],
    category: 'music',
    description: 'Change the volume music'
}