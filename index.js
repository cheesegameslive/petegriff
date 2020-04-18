const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

bot.on('ready', () => {//playing status
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'over u',
            type: "WATCHING",
            url: ""
        }
    });
});

bot.login(process.env.BOT_TOKEN).catch(console.error);
bot.on('ready', () => {
  console.log('im on nigga')
});


function RandomString(length) {
  var result           = '';
  var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}



bot.on('message', message => {
  if(message.content === '.lightshot')
  (message.channel.send("https://prnt.sc/" + RandomString(6) + "/direct" ))  
.catch(console.error);
  }
);
bot.on('message', message => {
  if(message.content === '.lightshotr')
  (message.channel.send("https://prnt.sc/r" + RandomString(5) + "/direct" ))  
.catch(console.error);
  }
);




bot.on('message', message => {
  if(message.content === '.restart')
   message.channel.send('brb')
   .then(message => bot.destroy())
  .then(() => bot.login(process.env.BOT_TOKEN))
  .then(message.channel.send('back')

)});