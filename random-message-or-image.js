// DBM Run Script - takes 4 messages, obtains one randomly, and stores it in a temp variable called "randomMessage". If you want to add more or take away some that's fine! Remember that you can replace the messages with image links as well if you want to get a random image. 
const messages = ["message one", "message two", "message three", "message four"]

const randomMessage = messages[Math.floor(Math.random() * messages.length)];

this.storeValue(randomMessage, 1, "randomMessage", cache);
Actions.callNextAction(cache);
