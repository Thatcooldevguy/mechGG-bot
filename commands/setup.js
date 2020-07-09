const Discord = require("discord.js");
const PermsDeined = new Discord.MessageEmbed()
    .setTitle("You can't do that!")
    .setColor(0x00AE86)
    .setDescription("Either your not a Admin, or you dont have ``ADMINISTRATOR`` permission on your role.")
    .setTimestamp()
const delay = ms => new Promise(res => setTimeout(res, ms));
exports.run = async (client, message) => {
    message.reply("Hold on.. Seting up perms...")
    if (!message.member.hasPermission("ADMINISTRATOR"))
     return message.channel.send(PermsDeined);
    if (message.guild.roles.cache.some(role => role.name === 'Mods')) {
        message.channel.send('A role with the name "Mods" already exists on this server. Skipping Creation.');
    }if(message.guild.roles.cache.some(role => role.name === 'Admins')) {
        message.channel.send('A role with the name "Admins" already exists on this server. Skipping Creation.');
        return message.channel.send("Setup Complete.")
    }if(!message.guild.roles.cache.some(role => role.name === 'Admins')) {
        message.guild.roles.create({ data: { name: 'Admins', permissions: ['ADMINISTRATOR', 'KICK_MEMBERS', 'BAN_MEMBERS'] } })
        .then(() => message.channel.send('Created Admin role.')); await delay(2000)
        .catch(console.error);


    }if(!message.guild.roles.cache.some(role => role.name === 'Mods')) {
        message.guild.roles.create({ data: { name: 'Mods', permissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS'] } })
        .then(() => message.channel.send('Created Mod role.'));  await delay(2000)
        .catch(console.error);
    }
    message.channel.send("Setup Complete.")
    message.channel.send("Mod commands will now work. Give someone the mod role to let them kick, and the admins role to let them ban. (note: admins can kick too)")
}