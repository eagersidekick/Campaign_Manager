const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Schema for character inventory
// Still needs to be implemented in front-end
const inventorySchema = new Schema ({
    itemName: {
        type: String,
        required: 'Your item needs a name!',
        minLength: 1,
        maxLength: 200,
        trim: true,
    },
    collectedOn: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
})
const Inventory = model('Inventory', inventorySchema);
module.exports = Inventory;