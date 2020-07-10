const Discord = require("discord.js");
const doLog = "731198202128105572"

exports.run = (client, message, args) => {
    let role_target =  message.guild.roles.cache.find(r => r.name === "Admins");
    let role_target2 =  message.guild.roles.cache.find(r => r.name === "Admins");
    if(!role_target2) {
        return message.channel.send("Could not add the role to user. -192")
    }
    if (!message.member.roles.cache.has(role_target2.id))
        return message.channel.send("Could not add the role to user. -193")
    let member = message.mentions.members.first();
    member.roles.add(role_target)
    message.channel.send("Admind:" + args)
    const PostLog = new Discord.MessageEmbed()
    .setTitle("AdminAction | Add Admin")
    .setColor(0x00AE86)
    .addFields(
      { name: 'Admin:', value: message.author.username, inline: true },
      { name: 'User who was Admind:', value: member, inline: true }
    )
    .setTimestamp()
    client.channels.cache.get(doLog).send(PostLog) 
    
}