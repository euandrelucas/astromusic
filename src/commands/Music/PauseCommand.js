const Discord = require('discord.js')

exports.run = async (client, message, args, prefix) => {

    //if(!args[0]) return message.channel.send(`<:dlz_error:795203031388913687>  ›  I need you to give me some argument!`)

    client.player.pause(message);
    
    if(!message.member.voice.channel) return;

    if(!message.guild.me.voice.channel) return;

    message.channel.send(`⏸️  ›  ${message.author} successfully paused!`)
}

exports.help = {
    name: 'pause',
    aliases: ['await'],
    category: 'music',
    description: 'Pause the current music'
}