module.exports = {
    name: 'poll',
    execute(message) {
        const addReactions = (message) => {
            message.react('👍')
            setTimeout(() => {
              message.react('👎')
            }, 750)
          }
          const poll = async _ => {
            await message.delete()
            const fetched = await message.channel.messages.fetch({ limit: 1 })
            if (fetched && fetched.first()) {
                addReactions(fetched.first())
            }
        }
        poll(message)
    },
};
