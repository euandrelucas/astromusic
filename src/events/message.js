const {client} = require('../../bot.js')
const config = require('../../config.json')
const c = require('colors')

client.on("message", async message => {
    if(!message.guild) return;
    if(message.author.bot) return;

    let prefix = config.prefix

    if(message.content.toLowerCase().includes(`<@!${client.user.id}>`) || message.content.toLowerCase().includes(`<@${client.user.id}>`)) {
        return message.channel.send(`<a:dl_setagif:795219340244418580> Hi, ${message.author}, my name is **${client.user.username}** and my prefix is **${prefix}** type \`${prefix}help\` to see my commands!`)
    }

    var args = message.content.substring(prefix.length).split(" ");
    let cmd = args.shift().toLowerCase();
    if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;
    let command =client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    if (!command) return;
    if(command.help.status === 'off') return;
    if (command) {
      command.run(client, message, args, prefix);
    } else {
      console.log();
    }
})