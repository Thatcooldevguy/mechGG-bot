const doLog = "731198202128105572"
const Discord = require("discord.js");

module.exports = (client, message, oldMessage) => {
    if (message.author.bot) return;
    const PostMsg = new Discord.MessageEmbed()
        .setTitle("UserAction | Message Edited")
        .setColor(0x00AE86)
        .addFields(
            { name: 'Message Before', value: "``" + message.content + "``", inline: true },
            { name: 'Message After', value: "``" + oldMessage.content + "``", inline: false}
          )
        .setTimestamp()
    client.channels.cache.get(doLog).send(PostMsg)    
}