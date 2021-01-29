const {client} = require('../../bot.js')
const c = require('colors')

client.on("guildCreate", guild => {
    console.log(c.bold(`[GUILD] - Entrei no Servidor: ${guild.name}`))
    client.user.setActivity(`${client.user.username} | ${client.guilds.cache.size} guilds`)
}) 