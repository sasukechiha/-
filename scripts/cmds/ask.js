const axios = require('axios');

const Prefixes = [
  'ask', 
  'ai',
  'ghost' 
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "Naruto",
    longDescription: "AI", 
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply(" ༐⸙.. 𝗚𝗛𝗢𝗦𝗧..✨👻 ╼╴╼╴╼╴╼╴╼╴╼╴╼╴╼╴         🕊𝚈𝙾 𝙵𝚁𝙰𝙽𝙶𝙸𝙽 𝙹𝙴 𝚂𝚄𝙸𝚂 𝚃𝙾𝙽 𝙰𝚂𝚂𝙸𝚂𝚃𝙰𝙽𝚃🤖 𝚅𝙸𝚁𝚃𝚄𝙴𝙻..🫶... 𝙿𝙾𝚂𝙴 𝙼𝙾𝙸 𝚃𝙰 𝚀𝚄𝙴𝚂𝚃𝙸𝙾𝙽 ༅    ╼╴╼╴╼╴╼╴╼╴╼╴╼╴╼╴               ༈ ࿂┉༐⸙ 𝗛𝗔𝗜𝗧𝗔𝗡𝗜.....❍♱")
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `➬.༐☄️👻 𝗚𝗛𝗢𝗦𝗧  ༐🪶🩷....✰
▭▭▭▭▭▭▭▭▭▭▭▭


${answer}


▢▢▢✞྿..𝗛𝗔𝗜𝗧𝗔𝗡𝗜..྿✞▢▢▢`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }uw
  }
      }
