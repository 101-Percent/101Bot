var gameImg = ""
var gameTitle = ""
var gameHex = ""
const valorantImg = "https://i.imgur.com/h6RFMSj.png"
const valorantHex = "#f94353"
const lolImg = "https://i.imgur.com/3w00JyY.jpg"
const lolHex = "#b88c35"
const Discord = require('discord.js');
module.exports = {
    name: 'cyp',
    execute(message) {
        const gameName = message.content.replace('!cyp ', '')
        if(gameName == "Valorant") {
          message.delete()
          gameImg = valorantImg
          gameTitle = "Valorant"
          gameHex = valorantHex
          var cypEmbed = new Discord.MessageEmbed()
          .setTitle(`Can you play ${gameTitle}?`)
          .setThumbnail(gameImg)
          .setAuthor(message.author.username + " wants to know...")
          .setFooter("React to this message to tell others!")
          .setColor(gameHex)
        } else if(gameName === "League of Legends") {
          message.delete()
          gameImg = lolImg
          gameTitle = "League of Legends"
          gameHex = lolHex
          var cypEmbed = new Discord.MessageEmbed()
          .setTitle(`Can you play ${gameTitle}?`)
          .setThumbnail(gameImg)
          .setAuthor(message.author.username + " wants to know...")
          .setFooter("React to this message to tell others!")
          .setColor(gameHex)
        } else if(gameName === "LoL") {
          message.delete()
          gameImg = lolImg
          gameTitle = "League of Legends"
          gameHex = lolHex
          var cypEmbed = new Discord.MessageEmbed()
          .setTitle(`Can you play ${gameTitle}?`)
          .setThumbnail(gameImg)
          .setAuthor(message.author.username + " wants to know...")
          .setFooter("React to this message to tell others!")
          .setColor(gameHex)
        } else {
          message.channel.send("Sorry that game was not recognized. Make sure to use !cyp with Valorant or League of Legends/LoL.")
          return;
        }
        message.channel.send(cypEmbed).then(async cypMsg => {
          await cypMsg.react('👍');
          await cypMsg.react('👎');
        });
    },
};