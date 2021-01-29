const Discord = require('discord.js')

exports.run = async (client, message, args, prefix) => {
    
    if(!args[0]) return message.channel.send(`<:dlz_error:795203031388913687>  ›  I need you to give me some argument!`)

    client.player.play(message, args.join(" "));
    
}

exports.help = {
    name: 'play',
    aliases: ['tocar', 'start', 'p'],
    category: 'music'
}