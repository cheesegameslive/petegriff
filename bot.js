const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {//playing status
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
  (message.channel.send("https://prnt.sc/r" + RandomString(5) + "/direct" ))  
.catch(console.error);
  }
);




client.on('message', message => {
  if(message.content === '.restart')
   message.channel.send('brb')
   .then(message => client.destroy())
  .then(() => client.login(process.env.client_TOKEN))
  .then(message.channel.send('back')

)});