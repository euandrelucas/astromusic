const {client} = require('../../bot.js')
const c = require('colors')

client.on("guildDelete", guild => {
    console.log(c.bold(`[GUILD] - Saí do Servidor: ${guild.name}`))
    client.user.setActivity(`${client.user.username} | ${client.guilds.cache.size} guilds`)
}) 