// DBM Run Script - If a member is online, it will jump to a certain action of your choice. If they are not online, you can jump to another action. Make sure when you write the number for jumpto it is NOT in (). 
if(msg.author.presence.status === "online") {
  const jumpto = (amount of actions you want to skip if the user is online, 1 to continue)
  const index = Math.max(jumpto - 1, 0);
  cache.index = index - 1;
  this.callNextAction(cache);
  }
}
else {
  const jumpto = (amount of actions you want to skip if the user is not online, 1 to continue)
  const index = Math.max(jumpto - 1, 0);
  cache.index = index - 1;
  this.callNextAction(cache);
  }
}
