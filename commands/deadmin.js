const Discord = require("discord.js");
let role_target =  message.guild.roles.cache.find(r => r.name === "Admins");
exports.run = (client, message, args) => {
    let member = message.mentions.members.first();
    member.removeRole(role_target)
    message.channel.send("Removed admin for:" + args)
}