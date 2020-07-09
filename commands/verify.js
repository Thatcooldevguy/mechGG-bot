const Discord = require("discord.js");
const NoRole = new Discord.MessageEmbed() 
.setTitle("Could not verify :(")
    .setColor(0x00AE86)
    .setDescription('no role was found. Please add the role ``verified`` to your sever. (**must be all lowercase**) ')
    .setTimestamp() 
exports.run = (client, message, args) => {
    let role = message.guild.roles.cache.find(r => r.name === "verified");
    let member = message.member;
    if(!role){
        message.channel.send(NoRole)
        message.channel.send("A crtical error has occuerd in this process, contact support with: ``NO_VERIFY_ROLE``. Abort.")


    }
    const done = new Discord.MessageEmbed() 
    .setTitle("Verified!")
        .setColor(0x00AE86)
        .setDescription('You have been verified! Enjoy the sever!')
        .setTimestamp() 
    if(role) {
        message.member.roles.add(role);
        message.channel.send(done)

    }
    };










