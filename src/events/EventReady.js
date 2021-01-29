const {client} = require('../../bot.js')
const c = require('colors')

client.on("ready", () => {
    require('../utils/AstroPlayer.js')
    console.log(c.green('[BOT] - Estou Online!'))
    client.user.setActivity(`${client.user.username} | ${client.guilds.cache.size} guilds`)
})