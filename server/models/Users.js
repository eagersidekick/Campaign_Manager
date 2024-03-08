const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match email address!']
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
    },
    campaign: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Campaign'
        }
    ]
})

const User = model('User', userSchema);

module.exports = User;