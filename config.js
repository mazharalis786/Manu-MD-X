//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    𝗠𝗔𝗡𝗨-𝗠𝗗  𝐁𝐎𝐓                                                 //
//                                                                                                      //
//                                         Ｖ：7.0                                                       //

//███╗░░░███╗░█████╗░███╗░░██╗██╗░░░██╗
//████╗░████║██╔══██╗████╗░██║██║░░░██║
//██╔████╔██║███████║██╔██╗██║██║░░░██║
//██║╚██╔╝██║██╔══██║██║╚████║██║░░░██║
//██║░╚═╝░██║██║░░██║██║░╚███║╚██████╔╝
//╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░

//███╗░░░███╗██████╗░
//████╗░████║██╔══██╗
//██╔████╔██║██║░░██║
//██║╚██╔╝██║██║░░██║
//██║░╚═╝░██║██████╔╝
//╚═╝░░░░░╚═╝╚═════╝░

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : MANU-MD
//  * @author : Manul Official
//  * @youtube : https://www.youtube.com/@ManulOfficialTech
//  * @description : Manu-MD ,A Multi-functional whatsapp user bot.
//*
//*
//base by Manul Official
//GitHub: @manulofficial7
//WhatsApp: +94742274855
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@ManulOfficialTech
//   * Created By Github: manulofficial7.
//   * Credit To Manul Official
//   * © 2024 MANU-MD-V7.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Manu-MD&vF1E3JQK#-NH74g_rAm1LM3peHZ30e5iIRT-w86SWSQa-AFAwtoQ",
ALIVE_IMG : process.env.ALIVE_IMG || "https://telegra.ph/file/ef48cc8d2d26081f7d46a.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "Put your alive messege",
MENU_IMG : process.env.MENU_IMG || "https://telegra.ph/file/ef48cc8d2d26081f7d46a.jpg",
MODE : process.env.MODE || "public",
WELCOME : process.env.WELCOME || "true",
ANTI_PHOTO: process.env.ANTI_PHOTO || "false",
ANTI_STICKER: process.env.ANTI_STICKER || "false",
WARN_COUNT : process.env.WARN_COUNT || "3",
AUTO_REACT : process.env.AUTO_REACT || "false",
TYPE : process.env.TYPE || "button",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
AUTO_BIO: process.env.AUTO_BIO || "true",
READ_CMD: process.env.READ_CMD || "false",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
MENU: process.env.MENU || "false",
ANTI_BAD: process.env.ANTI_BAD || "warn",
ANTI_BOT: process.env.ANTI_BOT || "true",
ANTI_LINK: process.env.ANTI_LINK || "warn",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "false",
AUTO_TYPING : process.env.AUTO_TYPING || "false",
AUTO_RECORDING : process.env.AUTO_RECORDING || "false",
OWNER_NUMBER : process.env.OWNER_NUMBER || "994402442393",
DELCHAT : process.env.DELCHAT || "pm",
FOOT : process.env.FOOT || "🧚‍♀️ 𝐀𝐖𝐀𝐈𝐒 𝐐𝐀𝐃𝐈𝐑-𝐌𝐃-𝐕❼💗",
BOT_INFO: process.env.BOT_INFO || "𝐀💞𝐍-𝐀𝐰𝐚𝐢𝐬-𝐌𝐃;𝐎𝐅𝐂;0;https://i.ibb.co/GRpbTZp/IMG-20240920-WA0020.jpg;https://whatsapp.com/channel/0029VabbHfvDDmFYzSyMDK21",
HANDLERS: process.env.HANDLERS || ".,",
MAX_SIZE: process.env.MAX_SIZE === undefined ? '1500': process.env.MAX_SIZE,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
};
