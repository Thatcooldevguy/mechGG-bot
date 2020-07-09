const message = require("./message");
const Discord = require("discord.js");
const doIntroChanID = "730577092206395455"

const PostMsg = new Discord.MessageEmbed()
        .setTitle("Thanks for inviteing me!")
        .setColor(0x00AE86)
        .setDescription("Thanks for choosing mechanyx.gg for your esports needs. Run ?setup to setup mod commands. Enjoy!")
        .setTimestamp()

module.exports = (client, message,guild) => {
    console.log("Joined a new guild!");
    client.channels.cache.get(doIntroChanID).send(PostMsg)




}