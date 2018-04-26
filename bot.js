const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === ('can you do this')) {
    msg.reply('https://www.youtube.com/watch?v=U-OeVWJ6nUk');
  }
});

client.login('process.env.BOT_TOKEN');
