const Discord = require("discord.js");
const PermsDeined = new Discord.MessageEmbed()
    .setTitle("You can't do that!")
    .setColor(0x00AE86)
    .setDescription("Either your not a Admin, or you dont have ``ADMINISTRATOR`` permission on your role.")
    .setTimestamp()

exports.run = (client, message, args) => {
    let role_target =  message.guild.roles.cache.find(r => r.name === "Admins");
    if(!role_target){
        return message.channel.send("Could not add the role to user. -192")
    }
    if (!message.member.roles.cache.has(role_target.id))
        return message.reply(PermsDeined);
    let member = message.mentions.members.first();
    member.role.remove(role_target)
    message.channel.send("Removed admin for:" + args)
}