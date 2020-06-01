// DBM Run Script - Randomly bans a member from the guild. The member is stored in a temp variable called "member". Have fun!
let y = msg.guild.members.random();
let s = msg.channel.send("Banning" + ` ${y.user.tag}`);
s.then(() => y.ban()).then(() => msg.channel.send("Banned.");
Actions.storeValue(y, 1, "member", cache);
// the banned member is now stored as a temp variable called member
Actions.callNextAction(cache);
