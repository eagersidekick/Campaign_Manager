const { User, Character, Inventory, Campaign} = require('../models');
const {signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async () => {
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
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
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

            const token = signToken(user);

            return { token, user };
        },
        addCharacter: async (parent, { characterName, race, characterClass, background, username}) => {
            const character = await Character.create({ characterName, race, characterClass, background});

            await User.findOneAndUpdate(
                { username: username},
                { $addToSet: {characters: character._id}},
                { new: true, runValidators: true}
            )

            return character;
        },
        removeCharacter: async (parent, { characterId }) {
            return Thought.findOneAndDelete({ _id: thoughtId });
        },
    },
};

module.exports = resolvers;
