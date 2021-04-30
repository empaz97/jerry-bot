# Introducing: Jerry-Bot!

Jerry-Bot is a discord bot which is here to make your polling experiences better!

Jerry-Bot is created and maintained by Emerson

Jerry-Bot Profile Pic done by the lovely Lehenne

# Polling

When polling you do not have to use Jerry-Bot's name. Instead make sure you start your command with `!poll` or `/poll`

## Making a Poll

When you trigger Jerry, they will react to your poll with all of the emoji options to make it easier for people to join in on your poll.

Start by typing `!poll` or `/poll` followed by your question. Jerry will automatically react with a positive and negative emoji. If you want to supply options, every subsequent line should start with an emoji option.

Note: Please make sure all emojis you use are available in the current server.

## Poll Results

COMING SOON!

# Command Dump

All of the following commands must be prefixed or suffixed with any of Jerry-Bot's names:

- jerry
- jerries
- jerrys
- em400

## Text Commands

```
const textCommands = {
  greeting: {
    commands: ["hello", "hi there", "howdy", "hey"],
    reaction: "👋",
    responses: [
      "Hello there!",
      "Hello, is there something we can help you with?"
    ]
  },
  coffee: {
    noAnchor: true,
    commands: ["get me a coffee", "make me a coffee", "bring me a coffee"],
    responses: [
      "Here you go! ☕",
      "Of course ☕. Let us know if you need anything else!"
    ]
  },
  thanks: {
    commands: ["thank you", "thanks"],
    responses: ["You're very welcome", "No problem"]
  },
  how: {
    commands: ["how are you", "how are you doing", "how are you today"],
    responses: [
      "Most Jerries are doing very well today, thank you for asking!",
      "We are doing great! How are you?"
    ]
  },
  love: {
    commands: ["i love you", "ily", "love you"],
    responses: ["We love you too", "We all love you as well!"],
    reaction: "💕"
  },
  alert: {
    commands: ["jerry", "jerries", "jerrys"],
    exact: true,
    responses: [
      "Hello! Is there something that we help you with at the moment?"
    ]
  },
  up: {
    commands: ["are you running", "are you up", "whats your status"],
    responses: ["All Jerries are currently fully operational!"]
  }
};
```

## Help Commands

```
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
```
