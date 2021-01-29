const c = require('colors')

const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(c.yellow(`[PING] - Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`));
  response.sendStatus(200);
});

app.listen(process.env.PORT);


const Discord = require('discord.js')
const config = require('./config.json')

const client = new Discord.Client({
    disableMentions: 'everyone',
    shardCount: 1,
    token: config.token
})

fs.readdir("./src/events/", (err, files) => {
    if(err)
        console.error(err);
    const eventsFiles = files.filter(file => file.split(".").pop() == "js");
    if(eventsFiles.length <= 0)
        return console.warn(c.brightRed("[EVENTS] - Não existem eventos para ser carregados"));
    eventsFiles.forEach((file, i) => {
        require("./src/events/" + file);
    })
    console.log(c.brightCyan("[EVENTOS] - Carregados com sucesso"))
  });

client.login(client.options.token)

module.exports = {
    client
}