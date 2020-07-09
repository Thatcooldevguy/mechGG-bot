const Discord = require("discord.js");


exports.run = (client, message, args) => {
    const Pong = new Discord.MessageEmbed()
        .setTitle("Pong!")
        .setColor(0x00AE86)
        .setDescription('(~ ' + client.ws.ping + 'ms ~)')
        .setTimestamp()
    
        message.channel.send(Pong);
}