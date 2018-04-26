const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'your mom gay') {
    message.reply('no u');
  }
});

client.on('message', message => {
  if (message.content === 'no u') {
    message.reply('https://www.google.com/search?q=uno+reverse+card&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiIys6vgdfaAhXPmeAKHZjPB-wQ_AUICigB&biw=1280&bih=703&safe=active&ssui=on#imgrc=Zyvdoual3fyA0M:');
  }
client.login(process.env.BOT_TOKEN);
