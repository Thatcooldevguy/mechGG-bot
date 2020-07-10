const ytdl = require('ytdl-core');
exports.run = async (client, message, args) => {
    const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=JE1Gvzxfm1E', { filter: 'audioonly' }));
    dispatcher.on('finish', () => {
        console.log('Finished playing!');

      });
}