const {Chat} = require('../models/chat')

module.exports = {
    create: () => {
        let chat = new Chat();
        chat.save()
            .then(() => {
                return chat;
            })
    },
    last: () => {
        return Chat.find().sort({x:1})
    },
    addMessage: ((chat,msg) => {
        Chat.find({_id:chat._id})
            .then((lastChat) => {
                lastChat.messages.push(msg)
                lastChat.save()
                    .then(() => {
                        console.log('msg added: ', msg)
                    })
            })
    })
}