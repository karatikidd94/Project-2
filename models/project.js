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
        enum: ['Seeking Help', 'Sharing']
    },
    description: {
        type: String,
        required: true
    },
    comment: [commentSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Project', projectSchema)