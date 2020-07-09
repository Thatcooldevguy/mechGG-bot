const Discord = require("discord.js");
exports.run = (client, message, args) => {
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;

      const uptime = new Discord.MessageEmbed()
        .setTitle("Uptime")
        .setColor(0x00AE86)
        .addFields(
          { name: 'Days', value: days, inline: true },
          { name: 'Hours', value: hours, inline: true },
          { name: 'Minutes', value: minutes, inline: true },
          { name: 'Secounds', value: seconds, inline: true },
        )
        .setTimestamp()
        message.channel.send(uptime);
}