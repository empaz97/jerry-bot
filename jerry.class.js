const _ = require("lodash");
const Discord = require("discord.js");

class Jerry {
  constructor(message, client) {
    this._matched = false;
    this.client = client;
    this.message = message;
    this.messageContent = message.content
      .toLowerCase()
      .replace(baseConstants.punctuationRegex, "");
  }

  respondToMessage() {}
}

module.exports = Jerry;
