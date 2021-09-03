module.exports = {
    name: 'help',
    execute(message) {
        message.channel.send(`
As of May 13, 2021 I am in Beta Version 3.0. These are my commands:
**!hi** - say hi to me
**!ping** - check my ping
**!poll** - make the message you sent before this into a poll
**!cyp** - ask people to play a game (usable with Valorant and League of Legends/LoL)
`)
    },
};