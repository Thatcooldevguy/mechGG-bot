const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let role_target =  message.guild.roles.cache.find(r => r.name === "Mods");
    let role_target2 =  message.guild.roles.cache.find(r => r.name === "Admins");
    if(!role_target2) {
        return message.channel.send("Could not add the role to user. -192")
    }
    if (!message.member.roles.cache.has(role_target2.id))
        return message.channel.send("Could not add the role to user. -193")
    let member = message.mentions.members.first();
    member.roles.add(role_target)
    message.channel.send("Modded:" + args)
    message.channel.send("to remove run ?demod @user.")
}