//Importing node_modules
const Discord = require('discord.js');
const fs = require('fs');
//Importing from config.json
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.commands = new Discord.Collection();
const importedCommands = ['cyp', 'help', 'hi', 'ping', 'poll',]

client.once('ready', async () => {
    console.log('101_Bot is online in:')
    client.guilds.cache.forEach((guild) => {
      console.log(guild.name)
    })
    client.user.setActivity('Beta Version 3.0, !help')
    console.log("Importing commands...")
    importedCommands.forEach(element => {
      const handle = require(`./${element}`)
      client.commands.set(handle.name, handle)
      console.log(`${element} imported`)
    })
    console.log("...all commands have succesfully been imported.")

})


client.on('message', message => {
 if (message.author.id == client.user.id) {
    return;
  }

  //Import commands
  if(message.content.startsWith(`${prefix}hi`)){
    client.commands.get('hi').execute(message);
  }
  if(message.content.startsWith(`${prefix}help`)){
    client.commands.get('help').execute(message);      
  }
  if(message.content.startsWith(`${prefix}ping`)){
    client.commands.get('ping').execute(message);
  }
  if(message.content.startsWith(`${prefix}cyp`)) {
    client.commands.get('cyp').execute(message);
  }
  if(message.content.startsWith(`${prefix}poll`)) { 
    client.commands.get('poll').execute(message);
  }

})



client.login(token)



