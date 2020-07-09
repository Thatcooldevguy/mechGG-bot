module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;

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
};
