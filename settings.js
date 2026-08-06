const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '9464021823' : process.env.OWNER_NUMBER, //ADD YOUR NUMBER
    SESSION_ID: process.env.SESSION_ID === undefined ? '𝕃𝔸ℝ𝔸-𝕄𝔻=2QAkyT7B#CKfN7FoQVDdhfDmUsnztBJARaLMQD89H8XiD5Hno2BA' : process.env.SESSION_ID, //ADD YOUR SSION ID
    GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? '𝕃𝔸ℝ𝔸-𝕄𝔻=2QAkyT7B#CKfN7FoQVDdhfDmUsnztBJARaLMQD89H8XiD5Hno2BA' : process.env.GITHUB_USER_NAME, //ADD YOUR GITHUB USERNAME
    GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? 'pabasara-malinda209' : process.env.GITHUB_AUTH_TOKEN //ADD YOUR GITHUB AUTH TOKEN WITHOUT gph_ ,  example - G5OxxdvEbiBPWxm4A0xypQGlyCr4FS267ifz
};

/*
LARA MD BOT DEVELOPED BY SADEESHA

(\ (\,,/)        /),,/)
(-•(    )       (•_•  )
(> ( '  )       ( 💔 )/
  U u  u         U  U
*/
