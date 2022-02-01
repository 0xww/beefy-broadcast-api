// use strict
const axios = require("axios");
const { PLATFORM_DISCORD_WEBHOOK_URL } = require("../constants");

export const sendMessage = async ({
  username = "Messenger Cow",
  title,
  message,
  type = "info",
  avatar = "https://raw.githubusercontent.com/beefyfinance/beefy-broadcast-api/main/src/images/messenger_cow.png",
}) => {
  let params = {
    username,
    content: `**${title}**\n${message}\n‎`,
    avatar_url: avatar,
  };

  switch (type) {
    case "warning":
      params.content = "⚠️ WARNING -> " + params.content;
      break;
    case "error":
      params.content = "🔥 ERROR -> " + params.content;
      break;
    default:
      params.content = "ℹ️ INFO -> " + params.content;
      break;
  }

  try {
    let response = await axios.post(PLATFORM_DISCORD_WEBHOOK_URL, params);
    if (response.status.ok) return true;
    else return false;
  } catch (error) {
    throw error;
  }
};
