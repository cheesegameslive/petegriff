const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'over u',
            type: "WATCHING",
            url: ""
        }
    });
});

client.login(process.env.client_TOKEN).catch(console.error);
client.on('ready', () => {
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



client.on('message', message => {
  if(message.content === '.lightshot')
  (message.channel.send("https://prnt.sc/" + RandomString(6) + "/direct" ))  
.catch(console.error);
  }
);
client.on('message', message => {
  if(message.content === '.lightshotr')
  (message.channel.send("https://prnt.sc/s" + RandomString(5) + "/direct" ))  
.catch(console.error);
  }
);


client.on('message', message => {
if (message.author.id !== '123152936653029378') return;
  message.react("😐");
});
client.on('message', message => {
if (message.author.id !== '209333717343141888') return;
  message.react("🇨");
  message.react("🇺");
  message.react("🇲");
});

client.on('message', message => {
if (message.author.id !== '342329902936358912') return;
  message.react("🗿");
});




client.on('message', message => {
  if(message.author.id !== '145220382012604416'||message.content === '.restart')
   message.channel.send('brb')
   .then(message => client.destroy())
  .then(() => client.login(process.env.client_TOKEN))
  .then(message.channel.send('back')

        })});
