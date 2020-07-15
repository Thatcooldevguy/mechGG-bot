const badwords = require("../resources/badwords.json")
const modwords = require("../resources/modwords.json")
const overidesJson = require("../resources/overides.json")

const Discord = require("discord.js");

const doLog = "731198202128105572"

module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;

    let BadWordParse = JSON.stringify(badwords)

    //splitting into array...

    const ModWordParse = JSON.stringify(modwords)

    const overidesJsonParse = JSON.stringify(overidesJson)

    const wordArray = JSON.parse(BadWordParse)

    console.log(wordArray);

    const ModWordArray = JSON.parse(ModWordParse)
    const overides = JSON.parse(overidesJsonParse)

    let messageWordArray = message.content.split(" ");

    messageWordArray.map(v => v.toLowerCase());

    //converting to lowercase words...

    for(var i = 0; i < wordArray.length; i++){

      //console.log("checking " + BadWordParse[i]);

      if (messageWordArray.includes(wordArray[i])) {

        console.log("got a match..."); 

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
        return message.delete();
        

      }

    }

   /* for (i = 0; i < overidesJson.length; i++) {
    if (message.content.toLowerCase().includes(overidesJson[i])) {
     return console.log("Got a OVERIRDE! Not fitering..")
    }
  } */

  /* for (i = 0; i < modwords.length; i++) {
    if (message.content.toLowerCase().includes(modwords[i])) {
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
   return message.delete();
  }

} */
    
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

