module.exports = {
    name: 'ping',
    execute(message) {
        message.channel.send("Calculating ping..." ).then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
            resultMessage.edit("Bot latency: " + ping + "ms")
        })
    },
};