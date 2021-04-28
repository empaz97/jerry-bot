const baseConstants = {
  names: ["jerry", "jerries", "jerrys", "em400"],
  prefixes: ["!poll", "/poll"],
  punctuationRegex: /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,
  emojiRegex: /<:.+:\d+>/g,
  mentionRegex: / <@!?(\d+)> /g
};

module.exports = baseConstants;
