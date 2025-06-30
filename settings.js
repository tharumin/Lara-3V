const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "7BYSALJA#ix-by6uzGXc23bzsOeM4WLobQXpKeaphDmWYRHjFyK0", // Add your session id
PREFIX: process.env.PREFIX || ".",
OWNER_NUMBER: process.env.OWNER_NUMBER || "5532998665591",
DEV: process.env.DEV || "5532998665591",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "*_`ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ᴊᴜꜱᴛ ɴᴏᴡ ꜱᴇᴇɴ ʙʏ ʟᴀʀᴀ ᴍᴅ`_* 💃🏻",
MODE: process.env.MODE || "public",  //public | private | inbox | group
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "true",    
AUTO_REACT: process.env.AUTO_REACT || "false",
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",   
READ_MESSAGE: process.env.READ_MESSAGE || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
ANTI_VV: process.env.ANTI_VV || "true",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
WELCOME: process.env.WELCOME || "true",
GOODBYE: process.env.GOODBYE || "true",
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
INBOX_BLOCK: process.env.INBOX_BLOCK || "false",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
