const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const campaignSchema = new Schema ({
    campaignName: {
        type: String,
        required: 'Your campaign needs a name!',
        minlength: 1,
        maxlength: 200,
        trim: true,
    },
    campaignCreator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    campaignImage: {
        type: String,
        required: false,
    }
})

const Campaign = model('Campaign', campaignSchema);
module.exports = Campaign;