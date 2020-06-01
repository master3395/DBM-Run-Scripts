// DBM Run Script - bans a user from all servers the bot is in. Usage: !command @user
const user = msg.mentions.users.first();
client.guilds.forEach(guild=>{guild.user.ban().then(() =>
msg.channel.send("Banning + ` ${user.tag}` + " from all servers."));
});
