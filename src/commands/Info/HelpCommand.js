const Discord = require('discord.js')

exports.run = async (client, message, args, prefix) => {
    
    const musicsize = client.commands.filter(command => command.help.category === "music").size
    const music = client.commands.filter(command => command.help.category === "music").map(e => `\`${prefix}${e.help.name}\``).join(" **|** ")

    const filterssize = client.commands.filter(command => command.help.category === "filters").size
    const filters = client.commands.filter(command => command.help.category === "filters").map(e => `\`${prefix}${e.help.name}\``).join(" **|** ")

    const infosize = client.commands.filter(command => command.help.category === "info").size
    const info = client.commands.filter(command => command.help.category === "info").map(e => `\`${prefix}${e.help.name}\``).join(" **|** ")

    const embed = new Discord.MessageEmbed()
    .setTitle(`${client.user.username} | Help`)
    .addField(`🎵  ›  Music Commands - [${musicsize}]`, `${music}`)
    .addField(`🔊  ›  Filter Commands - [${filterssize}]`, `${filters}`)
    .addField(`📝  ›  Info Commands - [${infosize}]`, `${info}`)
    .setThumbnail(client.user.displayAvatarURL({dynamic:true}))
    .setColor('611EE8')
    message.channel.send(embed)
    
}

exports.help = {
    name: 'help',
    aliases: ['ajuda', 'comandos', 'commands', 'cmds', 'cmd'],
    category: 'info',
    description: 'Shows the bot commands'
}