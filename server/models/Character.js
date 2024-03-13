const {Schema, model} = require('mongoose');

// Schema for characters
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
    },
    // Connects character schema to campaign
    campaign: {
        type: Schema.Types.ObjectId,
        ref: 'Campaign',
    },
    //Connects inventory to characters
    inventory: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Inventory',
        }
    ],
});

const Character = model('Character', characterSchema);

module.exports = Character;