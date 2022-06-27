const mongoose = require('mongoose')
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema


const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
})
const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    posting: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    comment: [commentSchema],
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Project', projectSchema)