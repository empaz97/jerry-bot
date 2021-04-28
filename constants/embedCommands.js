const helpArtifact = {
  title: "How to Use Jerry-Bot",
  url: "https://github.com/empaz97/jerry-bot/blob/main/README.md",
  description: "Click the above link for a full list of commands!",
  footer: "Questions? Suggestions? Message my creator LizardEm#1067 on Discord",
  fields: [
    {
      name: "What do you do?",
      value:
        "When you trigger me, I will react to your poll with all of the emoji options to make it easier for people to join in on your poll."
    },
    {
      name: "How to make a poll",
      value: `
      Start by typing \`!poll\` or \`/poll\` followed by your question. I will automatically react with a positive and negative emoji. If you want to supply options, every subsequent line should start with an emoji option.
      
      Note: Please make sure all emojis you use are available in the current server.
      `
    },
    {
      name: "Examples"
    }
  ],
  image:
    "https://cdn.discordapp.com/attachments/540252347306082316/836763661208387665/Screen_Shot_2021-04-27_at_8.39.44_PM.png"
};

const embedCommands = {
  help: {
    commands: [
      "help me",
      "what can you do",
      "how do you work",
      "docs",
      "readme",
      "what are your commands",
      "your prompts",
      "!help",
      "how do i use you",
      "how do i make a poll",
      "what do you do"
    ],
    artifacts: [helpArtifact]
  }
};

module.exports = embedCommands;
