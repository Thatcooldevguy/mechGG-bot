const Discord = require("discord.js");
exports.run = (client, message) => {
  const commands = [
      "8ball | ask the 8ball anything.",
      "amazememe | gets a amazememe from reddit. ",
      "ban | bans a user",
      "credits | Shows the credits (MUST HAVE MANAGE_MESSAGES PERM FOR THE BOT.)",
      "help (emebed) | Show the help emebed. (MUST HAVE MANAGE_MESSAGES PERM FOR THE BOT.) ",
      "joke (beta) | gets a joke",
      "Macro | Polo",
      "ping | Pong?",
      "sever | Shows the Support sever invite.",
      "texthelp | this help page.",
      "warn | warns someone."
  ];
  message.channel.send("Here are my commands:");
  message.channel.send(commands);











}
