const { User, Character, Inventory, Campaign} = require('../models');
const {signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('characters');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('characters');
        },
        characters: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Character.find(params);
        },
        character: async (parent, { characterId }) => {
            return Character.findOne({ _id: characterId });
        },
        characterInventory: async (parent, {characterId}) => {
            return Inventory.findOne({ characterId }).populate('inventory');
        },
        campaigns: async () => {
            return Campaign.find().populate('campaigns')
        }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            console.log(User);
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return {token, user};
        },
        login: async (parent, {email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const validPass = await user.isCorrectPassword(password);

            if (!validPass) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },
        addCharacter: async (parent, { characterName, characterRace, characterClass, characterBackground, username}) => {
            const character = await Character.create({ characterName, characterRace, characterClass, characterBackground});

            await User.findOneAndUpdate(
                { username: username},
                { $addToSet: {characters: character._id}},
                { new: true, runValidators: true}
            )

            return character;
        },
        removeCharacter: async (parent, { characterId }) => {
            return Thought.findOneAndDelete({ _id: characterId });
        },
        addCampaign: async (parent, { campaignName, campaignCreator, createdAt, username}) => {
            const campaign = await Campaign.create({ campaignName, campaignCreator, createdAt});

            await User.findOneAndUpdate(
                {username: username},
                { $addToSet: {campaigns: campaign._id}},
                { new: true, runValidators: true}
            )

            return campaign;
        },
    },
};

module.exports = resolvers;
