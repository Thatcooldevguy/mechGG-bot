const Discord = require("discord.js");
const doIntroChanID = "733741910459678882"


module.exports = (client, message, guild, member) => {
    
   const PostMsg = new Discord.MessageEmbed()
     .setTitle("Welcome to mechanyx.gg's offical discord (wow)")
     .setColor(0x00AE86)
     .setDescription("Welcome! to the **mechanyx.gg's** discord server!")
     .addFields(
        { name: 'Welcome!', value: "Please read the #rules and in there will be a command to verify.", inline: true }
     )
     .setTimestamp()
    // message.reply("Welcome!")
    const getChan = client.channels.cache.get(doIntroChanID)
    getChan.send(PostMsg)
}