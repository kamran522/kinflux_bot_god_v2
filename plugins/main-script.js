import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`

*KAMI bot God v2.0 WHATSAPP USER BOT 💃🏻♥️*

_KAMI bot  Is a Multi device Whatsapp User Bot created By KAMRAN, , _
ᴘʟᴇᴀꜱᴇ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ ᴀɴᴅ ꜰᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɢɪᴛʜᴜʙ:

  ▢ Git : ${_package.homepage}


⭐ Total Stars: *6*
🍽️ Forks: *100*
💭 language : *JavaScript* 
⚖️ license : *MIT License* 
⚙️ Branch : *main*
🧰 Last Updated :2023-08-29T05:10:54Z 
🚁 owner number : https://wa.me/923323963788
               
                 https://chat.whatsapp.com/CKsZELVzMrrIVI9TDqAu8X
              
      
*👸Thanks for using KAMI bot *



`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'git', 'script'] 

export default handler
