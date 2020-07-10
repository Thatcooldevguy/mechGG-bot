const delay = ms => new Promise(res => setTimeout(res, ms));
exports.run = async (client, message) => {
    const owner1 = message.author.id == "517495640020746250"
    const owner2 = message.author.id == "515728211624329227"
    if(owner1) {
        message.channel.send("goodnight.")
        console.log("Goodbye...Shuting down.")
        delay(500)
        process.exit()
        
    }
    if(owner2) {
        message.channel.send("goodnight.")
        console.log("Goodbye...Shuting down.")
        process.exit()
    }else{

        message.channel.send("Sorry, you can't do that")

    }

}
