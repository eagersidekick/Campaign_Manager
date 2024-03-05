const {Schema, model} = require('mongoose');

const characterSchema = new Schema({
    characterName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 20, 
    },
    characterRace: {
        type: String,
        required: true,
        trim: true,
    },
    characterClass: {
        type: String,
        required: true,
        trim: true,
    },
    characterBackground: {
        type: String,
        required: true,
        trim: true
    }
});

const Character = model('Character', characterSchema);

module.exports = Character;