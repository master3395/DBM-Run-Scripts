// DBM Run Script - if a channel is not nsfw it will send a message of your choice. If it is, it will continue to the next action. 
if (msg.channel.nsfw === false) {
    msg.channel.send("This isn’t an nsfw channel.");
}
else { Actions.callNextAction(cache);
}
