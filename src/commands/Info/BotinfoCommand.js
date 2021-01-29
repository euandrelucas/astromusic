const Discord = require('discord.js')

exports.run = async (client, message, args, prefix) => {
    
    let embed = new Discord.MessageEmbed()
    .setTitle(`${client.user.username} | BotInfo`)
    .setThumbnail(client.user.displayAvatarURL({dynamic:true}))
    .setColor('611EE8')
    
}

exports.help = {
    name: 'botinfo',
    aliases: ['astroinfo', 'info', 'i'],
    category: 'info'
}