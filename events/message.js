const badwords = require("../resources/badwords.json")
const modwords = require("../resources/modwords.json")
const overidesJson = require("../resources/overides.json")

const Discord = require("discord.js");

const doLog = "731198202128105572"

const Enmap = require("enmap");


module.exports = (client, message) => {
  async function random(min=1, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  async function doChange() {
    const status = await random(1, 3);
    switch (status) {
  
    case 1: {
      return client.user.setActivity(`am bot | 1.5.0`);
    }

  
    case 2: {
      return client.user.setActivity(`Users: ${client.users.cache.size}  | ?help`, { type: "WATCHING"})
    }

  
    case 3: {
      return client.user.setActivity(`what is life? | ?help`)
    }
}
}
    
  
  const key = `${message.guild.id}-${message.author.id}`;
  client.points = new Enmap({name: "points"});
  //starbord
  if (message.guild) {
    if (message.author.bot) return;
    
    client.points.ensure(`${message.guild.id}-${message.author.id}`, {
      user: message.author.id,
      guild: message.guild.id,
      points: 0,
      level: 1
    });
    
    const curLevel = Math.floor(0.1 * Math.sqrt(client.points.get(key, "points")));
   
    
    client.points.inc(key, "points");
    
    
    
    // Act upon level up by sending a message and updating the user's level in enmap.
    if (client.points.get(key, "level") < curLevel) {
      message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
      client.points.set(key, curLevel, "level");
    }

}

  
  
  
  
  // WATCH YOUR WORDS :tm: code below
    if (message.author.bot) return;

    let BadWordParse = JSON.stringify(badwords)


    const wordArray = JSON.parse(BadWordParse)

    

    let messageWordArray = message.content.split(" ");

    messageWordArray.map(v => v.toLowerCase());

    

    for(var i = 0; i < wordArray.length; i++){

      

      if (messageWordArray.includes(wordArray[i])) {

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

doChange()
// Ignore messages not starting with the prefix (in config.json)
if (message.content.indexOf(client.config.prefix) !== 0) return;

// Our standard argument/command name definition.
const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

// Grab the command data from the client.commands Enmap
const cmd = client.commands.get(command);

// If that command doesn't exist, silently exit and do nothing
if (!cmd) return message.channel.send ("Looks like that command does not exist! Try running ?help")


// Run the command
cmd.run(client, message, args, key);

  }
