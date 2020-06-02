// DBM Run Script - Use this in an event on interval. It keeps track of members with a certain custom status and kicks them if they have it. Enjoy!
client.guilds.find(guild => guild.id === "guild ID").members.filter(member => member.presence && member.presence.game && member.presence.game.state && member.presence.game.state.includes("custom status here")).forEach(member => member.send("You have violated the rules with your custom status. Please remove it and join back.").then(() => member.kick()))
// THIS NEEDS TO HAVE "DO NOT CALL NEXT ACTION" TURNED **OFF**
