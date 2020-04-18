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

bot.login(config.token).catch(console.error);
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
  if (message.content.toLowerCase().startsWith('.lightshot')) {
     (message.channel.send("https://prnt.sc/" + RandomString(6) + "/direct" ))
    .catch(console.error);
  }

});
bot.on('message', message => {
  if (message.content.toLowerCase().startsWith('.lightshotr')) {
     (message.channel.send("https://prnt.sc/r" + RandomString(5) + "/direct" ))
    .catch(console.error);
  }
});
bot.on('message', message => {
  if (message.content='.die' && message.author.id === '145220382012604416'){
    message.channel.send('brb')
    .then(msg => bot.destroy())
    .then(() => bot.login(config.token));
    message.channel.send('back')
  }
});

