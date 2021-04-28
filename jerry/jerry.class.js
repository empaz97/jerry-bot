const _ = require("lodash");
const Discord = require("discord.js");

const baseConstants = require("../constants/base");
const textCommands = require("../constants/textCommands");
const embedCommands = require("../constants/embedCommands");

class Jerry {
  constructor(message, client) {
    this._matched = false;
    this.client = client;
    this.message = message;
    this.messageContent = message.content
      .trim()
      .toLowerCase()
      .replace(baseConstants.punctuationRegex, "");
  }

  _commandMatched(commandInfo) {
    return commandInfo.commands.some(command => {
      if (commandInfo.exact) {
        return this.messageContent === command;
      }
      if (commandInfo.noAnchor) {
        return this.messageContent.includes(command);
      }
      return _.some(
        baseConstants.names,
        name =>
          this.messageContent.includes(`${name} ${command}`) ||
          this.messageContent.includes(`${command} ${name}`)
      );
    });
  }

  checkTextCommand(commandInfo) {
    if (this._commandMatched(commandInfo)) {
      if (commandInfo.reaction) {
        this.message.react(commandInfo.reaction);
      }

      if (commandInfo.niceResponses && this.messageContent.includes("please")) {
        // send a random nice response
        this.message.channel.send(_.sample(commandInfo.niceResponses));
      } else {
        // send a random response
        this.message.channel.send(_.sample(commandInfo.responses));
      }
      // matched
      this._matched = true;
      return false;
    }
    // not matched
    return true;
  }

  checkEmbedCommand(embedInfo) {
    if (this._commandMatched(embedInfo)) {
      const choice = _.sample(embedInfo.artifacts);
      const embed = new Discord.MessageEmbed()
        .setColor(_.get(embedInfo, "color", "#17c9ff"))
        .setTitle(_.get(choice, "title", "Untitled"));

      if (choice.url) {
        embed.setURL(choice.url);
      }
      if (choice.author) {
        embed.setAuthor(choice.author);
      }
      if (choice.image) {
        embed.setImage(choice.image);
      }
      if (choice.description) {
        embed.setDescription(choice.description);
      }
      if (choice.fields) {
        embed.addFields(...choice.fields);
      }

      this.message.channel.send(embed);
      this._matched = true;

      // matched
      return false;
    }
    // not matched
    return true;
  }

  buildPoll() {
    let emoji;
    const lines = _.split(this.message.content.trim(), /[\r\n]+/g);
    lines.shift();
    if (!lines.length) {
      this.message.react("✅");
      this.message.react("❌");
      return;
    }
    _.forEach(lines, line => {
      const found = line.match(baseConstants.emojiRegex);
      if (found) {
        emoji = found[0].replace("<", "").replace(">", "");
        let emojiId = _.last(emoji.split(":"));
        if (!this.client.emojis.cache.get(emojiId)) {
          this.message.channel.send(
            "Sorry, I don't recognize one of those emojis! Please make sure you use an emoji that is available to the whole server!"
          );
          return false;
        }
      } else {
        emoji = line.split(" ")[0];
      }
      this.message.react(emoji);
    });
  }

  respondToMessage() {
    if (
      _.some(baseConstants.prefixes, p =>
        this.message.content.trim().startsWith(p)
      )
    ) {
      this.buildPoll();
      return;
    }

    if (_.some(baseConstants.names, n => this.messageContent.includes(n))) {
      _.forEach(_.values(textCommands), command =>
        this.checkTextCommand(command)
      );
      if (this._matched) return;

      _.forEach(_.values(embedCommands), embed =>
        this.checkEmbedCommand(embed)
      );
      if (this._matched) return;
    }
  }
}

module.exports = Jerry;
