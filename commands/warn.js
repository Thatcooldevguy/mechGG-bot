const Discord = require('discord.js');
exports.run = (client, message, [mention, ...reason]) => {
  const modRole = message.guild.roles.cache.find(role => role.name === "Mods");
  const adminRole = message.guild.roles.cache.find(role => role.name === "Admins");
  const warnMember = message.mentions.members.first();
  const warnReason = reason.join(" ");
  const warned = new Discord.MessageEmbed()
      .setThumbnail(message.guild.iconURL())
      .setTitle("⚠️ You have been Warned in " + message.guild.name)
      .setColor(0xFFFF5C)
      .setDescription(`Reason: ${warnReason}`)
      .setTimestamp()
  const warnHelp = new Discord.MessageEmbed()
      .setThumbnail(message.guild.iconURL())
      .setTitle("Help")
      .setColor(0xFFFF5C)
      .setDescription(`!!warn @user reason | warns someone `)
      .setTimestamp()
  const warnedDone = new Discord.MessageEmbed()
      .setTitle("⚠️ User has been warned!" )
      .setColor(0xFFFF5C)
      .setDescription(`Reason: ${warnReason}`)
      .setTimestamp()
  const PermsDeined = new Discord.MessageEmbed()
      .setTitle("You can't do that!")
      .setColor(0x00AE86)
      .setDescription("Your not a mod or admin, please contact a mod or an admin if you need to warn someone.")
      .setTimestamp()
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    return message.reply(PermsDeined);
  }else if (!message.member.hasPermission("BAN_MEMBERS")) {
     return message.reply(PermsDeined);
  }else if (message.mentions.members.size === 0) {
    return message.reply(warnHelp);
  }
  warnMember.send(warned);
  message.reply(warnedDone)
}
