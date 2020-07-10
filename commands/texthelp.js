const Discord = require("discord.js");
exports.run = (client, message) => {
  const commands = [
      "ban | bans a user",
      "help (emebed) | Show the help emebed. (MUST HAVE MANAGE_MESSAGES PERM FOR THE BOT.) ",
      "ping | Pong?",
      "sever | Shows the Support sever invite.",
      "texthelp | this help page.",
      "warn | warns someone.",
      "kick | kicks someone."
  ];
  message.channel.send("Here are my commands:");
  message.channel.send(commands);











}
