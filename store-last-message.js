// DBM Run Script - Stores the last message sent in a channel. Useful for- well, it isn't really useful for anything. The message is stored in a temp variable called 
const channel = msg.channel;
channel.fetchMessages({ limit: 1 }).then(messages => {
let lastMessage = messages.first();
Actions.storeValue(lastMessage, 1, "lastMessage", cache);
Actions.callNextAction(cache);
