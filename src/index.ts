import Discord, { Channel, TextChannel } from 'discord.js';

require('dotenv').config();

const client = new Discord.Client();

let generalChannel: Channel | undefined, pruebaChannel: Channel | undefined;

client.once('ready', () => {
  console.log('Ready to rock!');
  generalChannel = client.channels.cache.get('810098409729163267');
  pruebaChannel = client.channels.cache.get('810108981028716545');

  // Ejemplo de como responder a un mensaje
  client.on('message', (message) => {
    if (message.channel.id === '810098409729163267') {
      if (message.content === 'Hola') message.channel.send('Que tal?');
      if (message.content === 'Bien') message.channel.send('Me alegro!');
    }
  });

  // Ejemplo de como enviar algo a un canal especifico
  (pruebaChannel as TextChannel).send('Hola');
  (generalChannel as TextChannel).send('Esto es general?');
});

client.login(process.env.discordBot);
