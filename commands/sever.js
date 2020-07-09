const Discord = require("discord.js");

exports.run =  (client, message) => {
    const SeverInviteShow = new Discord.MessageEmbed()
        .setTitle("Support Sever Invite")
        .setColor(0x00AE86)
        .setDescription("https://discord.gg/7MsMeg4")
        .setTimestamp()
    message.channel.send(SeverInviteShow)

}