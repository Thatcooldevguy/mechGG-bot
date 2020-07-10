const jeffCount = require("../resources/Globals.json")
exports.run = (client, message) => {
    const jeffCountParse = JSON.stringify(jeffCount);
    var jeffCounter;
    jeffCounter = jeffCount.getInt("jeffCounter")
    jeffCounter++
    message.channel.send("JEFFFF!" + "" + "This sever has envoked the jeff command" + "" + jeffCounter + ""  + "times. Go Jeff!")
}