
module.exports = async client => {
    
    // Log that the bot is online.
    console.log(`[StartupDeamon] OK! Severs: ${client.guilds.cache.size}`);
    console.log(`[StartupDeamon] With ${client.users.cache.size} users `)

    // Make the bot "play the game" which is the help command with default prefix.
    client.user.setStatus('online')
    client.user.setActivity(`Users: ${client.users.cache.size}  | ?help`, { type: "WATCHING"})
};