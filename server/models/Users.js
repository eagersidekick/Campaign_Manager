const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
    inventory: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Inventory',
        }
    ],
    characters: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Character',
        }
    ],
    campaign: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Campaign'
        }
    ]
})

const User = model('User', userSchema);

module.exports = User;