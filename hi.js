module.exports = {
    name: 'hi',
    execute(message) {
        message.channel.send("Hello, " + message.author.username + ". :wave:" )
    },
};
