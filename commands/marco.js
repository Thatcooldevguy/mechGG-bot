exports.run = (client, message, args) => {
    message.channel.send("Polo!").catch(console.error);
}
