const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94779062397' : process.env.OWNER_NUMBER, +94711010753
    SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID, 𝕃𝔸ℝ𝔸-𝕄𝔻=yEpSQSCb#VCvT1cl_UqB5EvMRu835dEirofM8otiC_u6YMKbi_UQ
    GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? '' : process.env.GITHUB_USER_NAME, Charuka123
    GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '' : process.env.GITHUB_AUTH_TOKEN, //ADD YOUR GITHUB AUTH TOKEN WITHOUT gph_ ,  example - G5OxxdvEbiBPWxm4A0xypQGlyCr4FS267ifz
    WELCOME: process.env.WELCOME === undefined ? 'true' : process.env.WELCOME,
    GOODBYE: process.env.GOODBYE === undefined ? 'true' : process.env.GOODBYE
};

/*
LARA MD BOT DEVELOPED BY SADEESHA

(\ (\,,/)        /),,/)
(-•(    )       (•_•  )
(> ( '  )       ( 💔 )/
  U u  u         U  U
*/
