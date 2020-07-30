var Twit = require('twit')
 
var T = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})
 
//np
//  tweet 'hello world!'
//
//T.post('statuses/update', { status: 'Started!' }, function(err, data, response) {
//  console.log(data)
//})

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
  console.log('im on homie')
});
client.on(message

var TweetFunction = function Tweet()
{
    T.post('statuses/update', { status: statusToSend}, function(err, data, response) {
        console.log(data)
        console.log('TWEETED')
      })
}

function TweetMedia()
{
    var b64content = fs.readFileSync(path, { encoding: 'base64' })
 
    // first we must post the media to Twitter
    T.post('media/upload', { media_data: b64content }, function (err, data, response) {
        // now we can assign alt text to the media, for use by screen readers and
        // other text-based presentations and interpreters
        var mediaIdStr = data.media_id_string
        var altText = "A funny"
        var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
 
        T.post('media/metadata/create', meta_params, function (err, data, response) {
            if (!err) {
            // now we can reference the media and post a tweet (media will attach to the tweet)
            var params = { status: statusToSend, media_ids: [mediaIdStr] }
 
                T.post('statuses/update', params, function (err, data, response) {
                    console.log(data)
                })
            } 
        })
    })
}

var tempData;

function PushVid()
{
    console.log('Waited');
        // now we can assign alt text to the media, for use by screen readers and
        // other text-based presentations and interpreters
        var mediaIdStr = tempData.media_id_string
        var altText = "A funny"
        var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
 
        T.post('media/metadata/create', meta_params, function (err, tempData, response) {
            if (!err) {
            // now we can reference the media and post a tweet (media will attach to the tweet)
            var params = { status: statusToSend, media_ids: [mediaIdStr] }
 
                T.post('statuses/update', params, function (err, tempData, response) {
                    console.log(tempData)
                })
            }
        })
        T.postMediaChunked
}

//var filePath = 'C:/Users/Ilan/Desktop/TwitterDiscordBot/media'
function TweetVideo()
{
    T.postMediaChunked({ file_path: path }, function (err, data, response) {
        tempData = data;
        console.log(data)
        setTimeout(PushVid, 1000);
    })
}

var statusToSend;

client.on('message', message => {
    if ( /*message.channel.id === '625003486521720842' || */ message.channel.id === '529773855812616207') 
    {
        if(message.content.startsWith("999.)"))
        {
            message.channel.send("1000.) https://twitter.com/HashtagRulez");
        }

        statusToSend = '';
        console.log('Test 1')

        if(message.attachments.first()){//checks if an attachment is sent
            if(message.content.length > 0)
            {
                statusToSend = message.content;
            }

            console.log('Test2');
            if(message.attachments.first().url.includes(".png")){
                console.log('Downloading Png');
                path = '/app/file.png'
                DownloadImage(message.attachments.first().url);
                setTimeout(TweetMedia, 1000);
            }
            else if(message.attachments.first().url.includes(".jpg"))
            {
                console.log('Downloading jpg');
                path = '/app/file.jpg'
                DownloadImage(message.attachments.first().url);
                setTimeout(TweetMedia, 1000);
            }/*
            else if(message.attachments.first().url.includes(".mp4"))
            {
                console.log('Downloading mp4');
                path = '/app/file.mp4'
                DownloadImage(message.attachments.first().url);
                setTimeout(TweetVideo, 3000);
                
            }*/
            else if(message.attachments.first().url.includes(".gif"))
            {
                console.log('Downloading gif');
                path = '/app/file.gif'
                DownloadImage(message.attachments.first().url);
                setTimeout(TweetMedia, 2000);
            }
            else if(message.attachments.first().url.includes(".mp3"))
            {
                console.log('Downloading gif');
                path = '/app/file.mp3'
                DownloadImage(message.attachments.first().url);
                setTimeout(TweetMedia, 2000);
            }
            else
            {
                console.log('Posting Link');
                statusToSend = message.content + ' \n' + message.attachments.first().url;
                TweetFunction();
            }
        }
        else 
        {
            var SplitMessage = message.content.match(/(https?\:\/\/)?([^\.\s]+)?[^\.\s]+\.[^\s]+/gi);
            if(SplitMessage != null)
            {
                statusToSend = SplitMessage[0];
                console.log(statusToSend);
                var parts = 0;
                if(SplitMessage.length > 1){ parts = 1}
                if(SplitMessage[parts].includes(".png")){
                    console.log('Downloading Png');
                    path = '/app/file.png'
                    DownloadImage(SplitMessage[parts]);
                    setTimeout(TweetMedia, 1000);
                }
                else if(SplitMessage[parts].includes(".jpg"))
                {
                    console.log('Downloading jpg');
                    path = '/app/file.jpg'
                    DownloadImage(SplitMessage[parts]);
                    setTimeout(TweetMedia, 1000);
                }
                /*
                else if(SplitMessage[parts].includes(".mp4"))
                {
                    console.log('Downloading mp4');
                    path = '/app/file.mp4'
                    DownloadImage(SplitMessage[parts]);
                    setTimeout(TweetMedia, 2000);
                }
                */
                else
                {
                    statusToSend = message.content;
                    console.log(statusToSend);
                    TweetFunction();
                }

            }
            else
            {
                statusToSend = message.content;
                console.log(statusToSend);
                TweetFunction();
            }
        }
    
    }
});



const fs = require('fs')
const request = require('request')

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}


var path = '/app/file.png'
const pathMp4 = '/app/file.mp4'

var DownloadImage = function Download(url)
{
    download(url, path, () => {
        console.log('😩 Done!') 
    })
}

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
    }
  );
  client.on('message', message => {
    if(message.content === '.lightshotr')
    (message.channel.send("https://prnt.sc/s" + RandomString(5) + "/direct" ))  
    }
  );
  
  
  client.on('message', message => {
  if (message.channel.id !== '529773855812616207') return;
    message.react("⛓");
  });
  
  client.on('message', message => {
  if (message.author.id !== '223657511071252482 ') return;
    message.react("723753039462400070");
  });
  
  
  
  client.on('message', message => {
  if (message.author.id !== '209333717343141888') return;
    message.react("686654799344828503");
  
  });
  
  
  client.on('message', message => {
  if (message.author.id !== '342329902936358912') return;
    message.react("🗿");
  });
  
  client.on('message', message => {
  if (message.author.id !== '417722024257912833') return;
    message.react("🐸");
  });


    
