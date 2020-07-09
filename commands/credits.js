const Discord = require("discord.js");
const Pagination = require('discord-paginationembed');

exports.run = async (client, message) => {
    const FieldsEmbed = new Pagination.FieldsEmbed()
        .setArray([{ word: 'discord-paginationembed | Framework for help menu' }, { word: 'anidotsguide | for the command handler, and some basic commands' },  {word: 'SSH#4388 | help with sysadmin' },  {word: 'Snavellet#9999 and 18.58.9.9.26#0128 | Helping with code'}, {word: ' VEEGISHx/Alexi5  | Base Fun commands'}])
        // Set users who can only interact with the instance, set as `[]` if everyone can interact. ])
        // Set users who can only interact with the instance, set as `[]` if everyone can interact.
        .setAuthorizedUsers([message.author.id])
        // A must: sets the channel where to send the embed
        .setChannel(message.channel)
        // Elements to show per page. Default: 10 elements per page
        .setElementsPerPage(2)
        // Have a page indicator (shown on message content)
        .setPageIndicator(true)
        .formatField('v1.0.1', el => el.word);


    FieldsEmbed.embed
        .setColor(0x00FFFF)
        .setTitle('Credits')
        .setDescription('All the people!')
    FieldsEmbed.build();


}