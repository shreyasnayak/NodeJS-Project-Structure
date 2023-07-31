module.exports.replaceSubString = function replaceSubString(message, info) {
    for (const key in info) {
      message = message.split(`<${key}>`).join(info[key]);
    }
    return message;
  };
  