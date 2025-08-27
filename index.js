const { Client, GatewayIntentBits } = require("discord.js")

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})


client.login(process.env.token);

client.on("ready", () => {
    console.log("Bot Online!" )
})

client.on("messageCreate", (message) => {
    if (message.content === "!comando") {
        message.channel.send("Ciao a tutti sono ninja!")
    }
})