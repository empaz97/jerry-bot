const Discord = require("discord.js");
const Jerry = require("./jerry.class");

const bot = new Discord.Client();
const token = process.env.BOT_TOKEN;

bot.on("ready", () => {
  console.log("bot is ready");
});

bot.on("message", function(message) {
  if (message.author.bot) return;
  jerryBot = new Jerry(message, bot);

  jerryBot.respondToMessage();
});

bot.login(token);
