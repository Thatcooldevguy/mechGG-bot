const Discord = require("discord.js");
const Pagination = require('discord-paginationembed');
const PermsDeined = new Discord.MessageEmbed()
    .setTitle("Oops!")
    .setColor(0x00AE86)
    .setDescription("It seems I do not have the `MANAGE_MESSAGES` perm. Please give me this, or run ?texthelp")
    .setTimestamp()
exports.run = async (client, message, member) => {
    const FieldsEmbed = new Pagination.FieldsEmbed()
        .setArray([{ word: 'ping | Pong?' },{ word: 'help | this message' },  {word: 'kick reason user | kicks someone' },  {word: 'ban reason user | bans someone' } , {word: 'warn reason user | warns someone' },  {word: 'glitch | HAAAAAAA. Everything is fine. '} , {word: 'mypoints  | Shows points for user'}, {word: 'botinfo  | Shows botinfo.'}, {word: 'jeff  | Shows Jeff Picture.'}, {word: 'jeffe  | Shows jeffe picture'}, {word: 'leaderboard  | Shows points leaderboard'} , {word: 'omegaF  | f.'} ,{word: 'clear @user amount  | clear messages for a user or amount.'}])
        // Set users who can only interact with the instance, set as `[]` if everyone can interact. ])
        // Set users who can only interact with the instance, set as `[]` if everyone can interact.
        .setAuthorizedUsers([message.author.id])
        // A must: sets the channel where to send the embed
        .setChannel(message.channel)
        // Elements to show per page. Default: 10 elements per page
        .setElementsPerPage(5)
        // Have a page indicator (shown on message content)
        .setPageIndicator(true)
        .formatField('v1.5.0-stable', el => el.word);


    FieldsEmbed.embed
        .setColor(0x00FFFF)
        .setTitle('Help Menu')
        .setDescription('This is the help menu for the Mechanyx.gg bot')
    if(!message.guild.me.hasPermission("MANAGE_MESSAGES"))
          return message.reply(PermsDeined);

    FieldsEmbed.build();

}
