const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FdJxVZAR#WG_haAXgp_7O-sUb_6bcrRjVZP0u-YxedTz-32yC1cs" ,
ALIVE_IMG:  process.env.ALIVE_IMG || "https://raw.githubusercontent.com/Imvisal/PIRATE-MD-/refs/heads/main/file_0000000009606230ae71aac10d3d153b.png" ,
ALIVE_MSG:  process.env.ALIVE_MSG || "Hello i am Alive now....! 🫣" ,
};
