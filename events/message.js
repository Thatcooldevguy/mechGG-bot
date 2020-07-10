const badwords = require("../resources/badwords.json")
const modwords = require("../resources/modwords.json")
const overidesJson = require("../resources/overides.json")
const Discord = require("discord.js");
const doLog = "731198202128105572"
module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;
   const BadWordParse = JSON.stringify(badwords)
   const ModWordParse = JSON.stringify(modwords)
   const overidesJsonParse = JSON.stringify(overidesJson)
   const wordArray = JSON.parse(BadWordParse)
   const ModWordArray = JSON.parse(ModWordParse)
   const overides = JSON.parse(overidesJsonParse)
   if(overides.some(word => message.content.includes(word)) ) {
     console.log("got overided word, not filtilering")
     return;
    }
   if( wordArray.some(word => message.content.includes(word)) ) {
    message.reply("Warning: please watch what you say...");
    const PostLog = new Discord.MessageEmbed()
        .setTitle("AutoMod | Profianty Filter Triggered!")
        .setColor(0x00AE86)
        .addFields(
          { name: 'Word', value: message.content, inline: true },
          { name: 'User who did it:', value: message.author.username, inline: true }
        )
        .setTimestamp()
    client.channels.cache.get(doLog).send(PostLog)    
    message.delete();
  }
  if( ModWordArray.some(word => message.content.includes(word)) ) {
    message.reply("Warning: please watch what you say...");
    const PostLog = new Discord.MessageEmbed()
        .setTitle("AutoMod | Profianty (Mod) Filter Triggered!")
        .setColor(0x00AE86)
        .addFields(
          { name: 'Word', value: message.content, inline: true },
          { name: 'User who did it:', value: message.author.username, inline: true }
        )
        .setTimestamp()
    client.channels.cache.get(doLog).send(PostLog)    
    message.delete();
  }
    
    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) !== 0) return;

    // Our standard argument/command name definition.
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);

    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return message.channel.send ("Looks like that command does not exist! Try running !!help")
    client.user.setActivity(`Users: ${client.users.cache.size}  | ?help`, { type: "WATCHING"})
    // Run the command
    cmd.run(client, message, args);
    }

