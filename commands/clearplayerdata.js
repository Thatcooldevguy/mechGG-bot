exports.run = (client, message, args, key) => {
    function clearDataRun() {
        message.channel.send("**WARNING: THIS WILL CLEAR ALL PLAYERDATA!** Proceed? yes/no")
        message.channel.awaitMessages(m => m.author.id == message.author.id,
            {max: 1, time: 30000}).then(collected => {
                    if (collected.first().content.toLowerCase() == 'yes') {
                            message.reply('Clearing data..');
                            client.points.clear()
                            message.channel.send("Operation Complete. Points database has been reset.")
                    }

                    else
                            message.channel.send('Operation canceled.');      
            }).catch(() => {
                    message.reply('No answer after 30 seconds, operation canceled.');
            });

    }
    if(message.author.id === "517495640020746250") {
        return clearDataRun()
    }
    if(message.author.id === "515728211624329227") {
        return clearDataRun()
    }else{
       return message.channel.send("Sorry, this is for bot owners only")
    }
}