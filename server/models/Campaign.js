const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//Schema for the campaigns
const campaignSchema = new Schema ({
    campaignName: {
        type: String,
        required: 'Your campaign needs a name!',
        minLength: 1,
        maxLength: 200,
        trim: true,
    },
    // Links campaigns to characters 
    characters: [{
        type: Schema.Types.ObjectId,
        ref: 'Character',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    campaignImage: {
        type: String,
        required: false,
    },
    //Links campaigns to users
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const Campaign = model('Campaign', campaignSchema);
module.exports = Campaign;