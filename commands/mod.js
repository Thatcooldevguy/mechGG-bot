const Discord = require("discord.js");
let role_target =  message.guild.roles.cache.find(r => r.name === "Mods");
exports.run = (client, message, args) => {
    let member = message.mentions.members.first();
    member.addRole(role_target)
    message.channel.send("Modded:" + args)
    message.channel.send("to remove run ?demod @user.")
}