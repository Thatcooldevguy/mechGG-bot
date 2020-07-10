const Discord = require("discord.js");
const doLog = "731198202128105572"
const casenum = Math.ceil(Math.random() * 100)
exports.run = (client, message, [mention, ...reason]) => {
    const NoModRole = new Discord.MessageEmbed()
        .setTitle("Config Error!")
        .setColor(0x00AE86)
        .setDescription("No Admin role! You must have a role named ``Admins`` **it must me A not a** ")
        .setTimestamp()
    const PermsDeined = new Discord.MessageEmbed()
        .setTitle("You can't do that!")
        .setColor(0x00AE86)
        .setDescription("Either your not a admin, or you dont have ``BAN_MEMBERS`` permission on your role.")
        .setTimestamp()
    const BackToHelp = new Discord.MessageEmbed()
        .setTitle("Help | Ban Command")
        .setColor(0x00AE86)
        .setDescription("**?ban reason user** | Bans a user")
        .setTimestamp()

    const modRole = message.guild.roles.cache.find(role => role.name === "Admins");
    if (!modRole)
        return message.reply(NoModRole);
    // if (!message.member.roles.cache.has(modRole.id))
    //   return message.reply(PermsDeined);

    if (message.mentions.members.size === 0)
        return message.reply(BackToHelp);

    if (!message.member.hasPermission("BAN_MEMBERS"))
        return message.reply(PermsDeined);

    const banMember = message.mentions.members.first();

    banMember.ban(reason.join(" ")).then(member => {
        message.reply("User was banned.");
        const PostLog = new Discord.MessageEmbed()
        .setTitle("ModAction | Ban")
        .setColor(0x00AE86)
        .addFields(
          { name: 'Moderator:', value: message.author.username, inline: true },
          { name: 'User who was banned:', value: banMember, inline: true },
          { name: 'Reason:', value: reason, inline: true },
          { name: 'Case:', value: casenum, inline: true }
        )
        .setTimestamp()
        client.channels.cache.get(doLog).send(PostLog) 
    });
};
