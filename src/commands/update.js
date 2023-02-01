const axios = require("axios");

async function spot(matches, event, api, extra) {
  try {
    const { data } = await axios(`https://raw.githubusercontent.com/din12321/apks/main/update.txt`);
    
    api.sendMessage(data.success, event.threadID, event.messageID)
  } catch(error) {
    api.sendMessage(error, event.threadID, event.messageID)
  }
}

module.exports = spot;