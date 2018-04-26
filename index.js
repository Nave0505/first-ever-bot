const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'your mom gay') {
    msg.reply('no u');
  }
});

client.login('NDM4MTEzODcxNzkwODY2NDM3.DcIhnw.b6_tXZDBjvtRPeoa46Tg1p9HjVQ');
