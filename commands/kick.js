const Discord = require("discord.js");
const doLog = "731198202128105572"
const casenum = Math.ceil(Math.random() * 100)
exports.run = (client, message, [mention, ...reason]) => {
    const NoModRole = new Discord.MessageEmbed()
        .setTitle("Config Error!")
        .setColor(0x00AE86)
        .setDescription("No mod role! You must have a role named ``Mods`` **it must me M not m** ")
        .setTimestamp()
    const PermsDeined = new Discord.MessageEmbed()
        .setTitle("You can't do that!")
        .setColor(0x00AE86)
        .setDescription("Either your not a mod, or you dont have ``KICK_MEMBERS`` permission on your role.")
        .setTimestamp()
    const BackToHelp = new Discord.MessageEmbed()
        .setTitle("Help | Kick Command")
        .setColor(0x00AE86)
        .setDescription("**?kick reason user** | Kicks a user")
        .setTimestamp()

    const modRole = message.guild.roles.cache.find(role => role.name === "Mods");
    if (!modRole)
        return message.reply(NoModRole);
    //if (!message.member.roles.cache.has(modRole.id))
    //    return message.reply(PermsDeined);

    if (message.mentions.members.size === 0)
        return message.reply(BackToHelp);

    if (!message.member.hasPermission("KICK_MEMBERS"))
        return message.reply(PermsDeined);

    const kickMember = message.mentions.members.first();

    kickMember.kick(reason.join(" ")).then(member => {
        message.reply("User was kicked.");
        const PostLog = new Discord.MessageEmbed()
        .setTitle("ModAction | Kick")
        .setColor(0x00AE86)
        .addFields(
          { name: 'Moderator:', value: message.author.username, inline: true },
          { name: 'User who was kicked:', value: kickMember, inline: true },
          { name: 'Reason:', value: reason, inline: true },
          { name: 'Case:', value: casenum, inline: true }
        )
        .setTimestamp()
        client.channels.cache.get(doLog).send(PostLog) 
    });
};
