const axios = require("axios");

async function spot(matches, event, api, extra) {
  try {
    const { data } = await axios(`http://ambotintawn.byethost7.com/spot.php`);
    
    api.sendMessage(data.success, event.threadID, event.messageID)
  } catch(error) {
    api.sendMessage(error, event.threadID, event.messageID)
  }
}

module.exports = spot;