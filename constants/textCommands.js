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

module.exports = textCommands;
