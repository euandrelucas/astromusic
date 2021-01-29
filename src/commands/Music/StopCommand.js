const Discord = require('discord.js')

exports.run = async (client, message, args, prefix) => {
    
    //if(!args[0]) message.channel.send(`<:dlz_error:795203031388913687>  ›  I need you to give me some argument!`)

    client.player.stop(message);
    
}

exports.help = {
    name: 'stop',
    aliases: ['parar', 'end'],
    category: 'music',
    description: 'Stop the current music'
}