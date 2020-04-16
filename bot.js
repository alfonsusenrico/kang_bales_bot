const Discord = require('discord.js')
const client = new Discord.Client()
const req = require('node-fetch')

let settings = { method: "Get" }

client.on('ready', () => {
	console.log("Connected as " + client.user.tag)
})

client.on('message', (receivedMessage) => {
	if (receivedMessage.author == client.user) {
		return
	}
	if (receivedMessage.content.startsWith(">")) {
		processCommand(receivedMessage)
	}
})

function processCommand(receivedMessage) {
	let fullCommand = receivedMessage.content.substr(1)
	let splitCommand = fullCommand.split(" ")
	let primaryCommand = splitCommand[0]
	let arguments = splitCommand.slice(1)

	//console.log("Command received: "+ primaryCommand)
	//console.log("Arguments: "+ arguments)

	primaryCommand = primaryCommand.toLowerCase()
	receivedMessage.channel.send("Opo "+primaryCommand)
	
}

client.login("")