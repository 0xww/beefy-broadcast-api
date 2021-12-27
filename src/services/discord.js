// use strict
const axios = require("axios");
const { PLATFORM_DISCORD_WEBHOOK_URL } = require("../constants");

export const sendMessage = async ({
  title,
  message,
  type = "info",
  icon = "https://beefy.com/images/icons/cow.svg",
}) => {
  let params = {
    username: "Messanger Cow",
    content: `
    **${title}**
    - ${message}\n`,
  };

  switch (type) {
    case "warning":
      params.content = " - - - - WARNING - - - - " + params.content;
      break;
    case "error":
      params.content = " - - - - ERROR - - - - -" + params.content;
      break;
    case "alert":
      params.content = " - - - - ALERT - - - - - " + params.content;
      break;
    default:
      params.content = " - - - - INFO - - - - - - " + params.content;
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
