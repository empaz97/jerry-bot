const Discord = require("discord.js");
const { Client } = require("pg");
const Jerry = require("./jerry/jerry.class");

const bot = new Discord.Client();
const token = process.env.BOT_TOKEN;
const connectionString = process.env.DATABASE_URL;

const client = new Client({
  connectionString
});

bot.on("ready", () => {
  console.log("Bot is ready!");
});

bot.on("message", message => {
  if (message.author.bot) return;
  jerryBot = new Jerry(message, bot);

  jerryBot.respondToMessage();
});

bot.on("disconnect", () => {
  console.log("Bot was disconnected");
  client
    .end()
    .then(() => console.log("Disconnected from db!"))
    .catch(err => console.error("Error disconnecting from db...", err.stack));
});

client
  .connect()
  .then(() => {
    console.log("Connected to db...");
    bot.login(token);
  })
  .catch(err => console.error("Could not connect to db...", err.stack));
