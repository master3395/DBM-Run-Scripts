// DBM Run Script - With this Run Script, you can check if a member has a certain custom status. If they do, it will give them a role. If not, it will remove the role. This is best used in events on interval. 
const gg = bot.guilds.get("SERVER ID HERE");
const role = gg.roles.find(r => r.name === "ROLE NAME HERE");
gg.members.filter(member => member.presence && member.presence.game && member.presence.game.state === "CUSTOM STATUS HERE").forEach(member => member.addRole(role));
gg.members.filter(member => member.presence && member.presence.game && member.presence.game.state !== "CUSTOM STATUS HERE").forEach(member => member.removeRole(role));
// make sure you fill in the required parts: server id, role name, and the status you want to check for (make sure you fill both in)!
// do not change the on interval, only make it higher than it is now. It can cause api abuse.
