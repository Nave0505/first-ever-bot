const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'no u') {
    message.reply('https://pbs.twimg.com/media/DQ1kynkW4AArXD9.jpg');
  }
});

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'your mom gay') {
    message.reply('no u');
  }
});
client.login(process.env.BOT_TOKEN);
