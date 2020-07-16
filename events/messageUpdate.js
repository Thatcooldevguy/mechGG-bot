const doLog = "731198202128105572"
const Discord = require("discord.js");

module.exports = (client, message, oldMessage, newMessage) => {
    if (message.author.bot) return;
    const newMsg = newMessage.content
    const oldMsg = oldMessage.content
    const PostMsg = new Discord.MessageEmbed()
        .setTitle("UserAction | Message Edited")
        .setColor(0x00AE86)
        .addFields(
            { name: 'Message Before', value: "``" + oldMsg + "``", inline: true },
            { name: 'Message After', value: "``" + newMsg + "``", inline: false}
          )
        .setTimestamp()
    client.channels.cache.get(doLog).send(PostMsg)    
}