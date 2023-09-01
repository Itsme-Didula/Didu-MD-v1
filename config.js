const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'ZEROTWO=4iFHXDSC#QpsOe7_BFth33coFCHD_yd8BPgc8yn_2p28n0N4ot6M',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://didumd_user:msDykYXJV0fjhOOEqb4QaiNjmogn2LD4@dpg-cjoi1f5he99c73d0urvg-a.frankfurt-postgres.render.com/didumd',
LANG: process.env.BOT_LANG || 'EN' ,
ANTI_BAD: process.env.ANTI_BAD || 'false',
MAX_SIZE: process.env.MAX_SIZE || 200,
ONLY_GROUP: process.env.ONLY_GROUP || 'false',
ANTI_LINK: process.env.ANTI_LINK || 'false' ,
ANTI_BOT: process.env.ANTI_BOT || 'false',
ALIVE: process.env.ALIVE || `default`,
FOOTER: process.env.FOOTER ||  '©🪄ᴅɪᴅᴜ ᴍᴅ📡',
LOGO: process.env.LOGO || `https://github.com/vihangayt0/ZeroTwo-Uploads/blob/main/ZERO-TWO.png?raw=true` 
};
