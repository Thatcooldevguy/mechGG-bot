const Discord = require("discord.js");
const doLog = "731198202128105572"
const PermsDeined = new Discord.MessageEmbed()
    .setTitle("You can't do that!")
    .setColor(0x00AE86)
    .setDescription("Either your not a mod, or you dont have ``manage_messages`` permission on your role.")
    .setTimestamp()
const NoModRole = new Discord.MessageEmbed()
    .setTitle("Config Error!")
    .setColor(0x00AE86)
    .setDescription("No mod role! You must have a role named ``Mods`` **it must me M not m**  You can run ?setup to fix this.")
    .setTimestamp()
exports.run = async (client, message, member,args) => {
    const user = message.mentions.users.first();
    const modRole = message.guild.roles.cache.find(role => role.name === "Mods");
    if(!modRole){
        return message.channel.send(NoModRole)
    }
    if (!message.member.roles.cache.has(modRole.id))
        return message.reply(PermsDeined);
    const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
    if (!amount) return message.reply('Must specify an amount to delete!');
    if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
    // Fetch 100 messages (will be filtered and lowered up to max amount requested)
    message.channel.messages.fetch({
    limit: 100,
    }).then((messages) => {
    if (user) {
     const filterBy = user ? user.id : Client.user.id;
     messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
    }
    message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    const PostLog = new Discord.MessageEmbed()
    .setTitle("ModAction | Clear")
    .setColor(0x00AE86)
    .addFields(
      { name: 'Moderator:', value: message.author.username, inline: true },
      { name: 'Messages cleared:', value: amount, inline: true }
    )
    .setTimestamp()
    client.channels.cache.get(doLog).send(PostLog) 
    
    message.channel.send("Complete: Deleted: " + amount)
});

}