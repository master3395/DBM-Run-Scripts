// DBM Run Script - Replace message 1, message 2, etc. with messages of your choice. This will pick one randomly and depending on which one it is you can jump to an action. Don't put the number for jumpto in (). Enjoy!
const messages = ["message one", "message two", "message three", "message four"]

const randomMessage = messages[Math.floor(Math.random() * messages.length)];

this.storeValue(randomMessage, 1, "randomMessage", cache);
Actions.callNextAction(cache);

if(tempVars("randomMessage") === "message one") {
  const jumpto = (amount of actions you want to skip if the user is not online, 1 to continue)
  const index = Math.max(jumpto - 1, 0);
  cache.index = index - 1;
  this.callNextAction(cache);
}

if(tempVars("randomMessage") === "message two") {
  const jumpto1 = (amount of actions you want to skip if the user is not online, 1 to continue)
  const index1 = Math.max(jumpto1 - 1, 0);
  cache.index1 = index1 - 1;
  this.callNextAction(cache);
}

if(tempVars("randomMessage") === "message three") {
  const jumpto2 = (amount of actions you want to skip if the user is not online, 1 to continue)
  const index2 = Math.max(jumpto2 - 1, 0);
  cache.index2 = index2 - 1;
  this.callNextAction(cache);
}

if(tempVars("randomMessage") === "message four") {
  const jumpto3 = (amount of actions you want to skip if the user is not online, 1 to continue)
  const index3 = Math.max(jumpto3 - 1, 0);
  cache.index3 = index3 - 1;
  this.callNextAction(cache);
}
