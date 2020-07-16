const Discord = require("discord.js");
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');
const { version } = require('../package.json');
// embed by https://github.com/MenuDocs/Discord.js-v12-Tutorials/blob/Episode-7/src/Commands/Information/Botinfo.js
// tweaked for mechGG
exports.run = (client, message) => {
    const core = os.cpus()[0];
    const embed = new Discord.MessageEmbed()
            .setTitle("System Info")
			.setColor(message.guild.me.displayHexColor || 'BLUE')
			.addField('General', [
				`**❯ Servers:** ${client.guilds.cache.size.toLocaleString()} `,
				`**❯ Users:** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
				`**❯ Creation Date:** ${utc(client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
				`**❯ Node.js:** ${process.version}`,
				`**❯ Version:** v${version}`,
				`**❯ Discord.js:** 12.2.0`,
				'\u200b'
			])
			.addField('System', [
				`**❯ Platform:** ${process.platform}`,
				`**❯ CPU:**`,
				`\u3000 Cores: ${os.cpus().length}`,
				`\u3000 Model: ${core.model}`,
				`\u3000 Speed: ${core.speed}MHz`,
				
			])
            .setTimestamp();
        message.channel.send(embed)


}