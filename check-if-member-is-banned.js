// DBM Run Script - Use this to check if a member is banned. You can set your own messages as well. Make sure you fill out the user id of the person you want to check. 
const userToFindBan = client.users.get("user id of the person");
msg.guild.fetchBans().then(bans => {
if (bans.has(userToFindBan)) {
  msg.channel.send("This user is banned!");
}
else {
msg.channel.send("This user isn’t banned!")
}
})
