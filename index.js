const Discord = require('discord.js');
const bot = new Discord.Client();


const token = 'NjE0NjU3ODY3NjUxMjE5NDg3.XWlj9Q.gfmeHRxfXGG2FEFn_9P4P32KR1Y';


const PREFIX = '-';





bot.on('ready', () =>{
    console.log ('AABot is online!')
    bot.user.setActivity('https://discord.gg/uXg3Nrq ---------- Made by imanthony#0420 ---------- ')
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split("-");

  

    switch(args[0]){
        case 'wyd':
       message.channel.send('Slaying weebs with my Sharpness V Sword, hbu?')
       break;
        case 'AntiAnime':
        message.channel.send('Gotta kill em all!')
        break;
        case 'AntiFurry':
        message.channel.send('Decimate the furries. Now.')
        break;
        case 'suggestion':
        message.channel.send('DM imanthony#0420 for suggestions!')
        break;
        case 'pie':
        message.channel.send('Mr Pie is better then every human')
        break;
        case 'sandvich':
        message.channel.send('sandvich is god')
        break;
        case 'help':
        message.channel.send('```COMMAND LIST - http://tiny.cc/AABOT1 ```')
        break;
        case 'nutman':
        message.channel.send('caffene makes me fell jittery, like i want to depopulate a anime convention')
        break; 
        case 'aura':
        message.channel.send('Aura is dad amirite?')
        break;
        case 'propaganda':
        message.channel.send('this command is in the making, sorry!')

        

    }


})

    
bot.login(token);
function newFunction() {
    return '-';
}