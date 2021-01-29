const Discord = require('discord.js')
const os = require('os-utils')

exports.run = async (client, message, args, prefix) => {
    
    let adg = await client.users.fetch('717766639260532826');

    let users = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)

    let ram = process.memoryUsage().heapUsed / 1024 / 1024

    let cpu = await os.cpuUsage(function (v) {

    let embed = new Discord.MessageEmbed()
    .setTitle(`${client.user.username} | BotInfo`)
    .setDescription(`Hello **${message.author.username}**, my name is **${client.user.username}** and i am a simple discord musicbot\n\nI am developed by \`${adg.tag}\` and i am open-source (click [here](https://github.com/yADGithub/astromusic))\nI am currently on **${client.guilds.cache.size} servers** with **${users} users**`)
    .addField(`🎵  ›  Now playing:`, `\`Now Playing on ${client.player.queues.size} servers\``, true)
    .addField(`💻  ›  Host Stats:`, `\`${ram.toFixed(2)}MB / 512MB\``, true)
    .addField(`<:dlz_host:793940551376306216>  ›  CPU Stats:`, `\`${v.toFixed(2)}%\``, true)
    .setThumbnail(client.user.displayAvatarURL({dynamic:true}))
    .setColor('611EE8')
    message.channel.send(`${message.author}`, embed)
    
    })
}

exports.help = {
    name: 'botinfo',
    aliases: ['astroinfo', 'info', 'i'],
    category: 'info'
}