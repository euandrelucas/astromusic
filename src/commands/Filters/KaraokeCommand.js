const Discord = require('discord.js')

exports.run = async (client, message, args, prefix) => {
    
    if(!args[0]) message.channel.send(`<:dlz_error:795203031388913687>  ›  I need you to give me some argument \`[enable/disable]\`!`)
    
    if(args[0] === 'enable' || 'on' || 'ativar') {
        if(!message.member.voice.channel) return;

        if(!message.guild.me.voice.channel) return;

        client.player.setFilters(message, {
        karaoke: true
        });
    }

    if(args[0] === 'disable' || 'off' || 'desativar') {
        if(!message.member.voice.channel) return;

        if(!message.guild.me.voice.channel) return;

        client.player.setFilters(message, {
        karaoke: false
        });
    }
    
}

exports.help = {
    name: 'karaoke',
    aliases: ['kara', 'oke', 'karaokefilter'],
    category: 'filters',
    description: 'Enable the **karaoke** filter'
}