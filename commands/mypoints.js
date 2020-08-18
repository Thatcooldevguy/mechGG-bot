exports.run = (client, message, args, curLevel, key) => {
    return message.channel.send(`You currently have ${client.points.get(key, "points")} points, and are level ${client.points.get(key, "level")}!`);
}