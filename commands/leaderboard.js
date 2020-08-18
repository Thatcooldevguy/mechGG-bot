const Discord = require("discord.js");
exports.run = (client, message, args, key) => {
    const filtered = client.points.filter( p => p.guild === message.guild.id ).array();

  
    const sorted = filtered.sort((a, b) => b.points - a.points);


    const top10 = sorted.splice(0, 10);

  
    const embed = new Discord.MessageEmbed()
     .setTitle("Leaderboard")
     .setAuthor(client.user.username, client.user.avatarURL)
     .setDescription("Our top 10 points leaders!")
     .setColor(0x00AE86);
    for(const data of top10) {
     embed.addField(client.users.get(data.user).tag, `${data.points} points (level ${data.level})`);
    }
    return message.channel.send({embed});
}