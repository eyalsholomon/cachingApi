const chatsRepository = require("../repositories/chatsRepository")

module.exports.findChatByName = async (chatName) => {
    return chatsRepository.findChatByName(chatName)
}