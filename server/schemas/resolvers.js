const { User, Character, Inventory, Campaign} = require('../models');
const { findById } = require('../models/Character');
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
            return Character.find(params).populate('inventory');
        },
        character: async (parent, { characterId }) => {
            return Character.findOne({ _id: characterId });
        },
        characterInventory: async (parent, {characterId}) => {
            return Inventory.findOne({ characterId }).populate('inventory');
        },
        charactersByCampaign: async (_, { campaignId }) => {
            try {
              const characters = await Character.find({ campaignId });
              return characters;
            } catch (error) {
                console.log("Error fetching ", err);
                throw err;
            }
        },
        campaigns: async () => {
            try { 
                const campaigns = await Campaign.find().populate('characters');
                console.log(campaigns);
                return campaigns;
            } catch (error) {
                console.log("Error fetching campaigns:", err);
                throw err;
            }
        },
        campaign: async (_, { campaignId }) => {
            try {
              const campaign = await Campaign.findById(campaignId).populate('characters');
              return campaign;
            } catch (err) {
              console.error(err);
              throw new Error('Error fetching campaign');
            }
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            console.log(User);
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            console.log(token, user);
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
        addCharacter: async (parent, { characterName, characterRace, characterClass, characterBackground, username, campaignId }) => {

            const campaign = await Campaign.findById(campaignId);
            if (!campaign) {
                throw error('Campaign not found; Please create a campaign first');
            }
            const character = await Character.create({ characterName, characterRace, characterClass, characterBackground, campaign: campaignId});

            await User.findOneAndUpdate(
                { username: username},
                { $addToSet: {characters: character._id}},
                { new: true, runValidators: true}
            )
            await Campaign.findByIdAndUpdate(campaignId, { $addToSet: { characters: character._id } },
                {new:true, runValidators: true });
                const result = await Character.findById(character._id).populate('campaign');


            return result;
        },
        removeCharacter: async (parent, { characterId }) => {
            return Character.findOneAndDelete({ _id: characterId });
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
        addCharacterInventory: async (parent, { characterId, itemName }) => {
            const inventory = await Inventory.create({itemName});
 
            const character = await Character.findById(characterId)
            character.inventory.push(inventory);
            character.save();

            await Character.findOneAndUpdate(
                // { $push: {inventory: inventory}},
                { characterId: characterId},
                { $addToSet: { inventory: inventory._id}},
                { new: true, runValidators: true}
            )
            await inventory.save();
            return inventory;
        },
        addCharacterToCampaign: async (_, { characterId, campaignId }) => {
            const campaign = await Campaign.findById(campaignId);
            if (!campaign) {
              throw new Error('Campaign not found');
            }
      
            const updatedCharacter = await Character.findByIdAndUpdate(characterId, { $set: { campaign: campaignId } }, { new: true });
      
            if (!updatedCharacter) {
              throw new Error('Character not found');
            }
      
            return updatedCharacter;
          },
        removeUser: async (parent, { userId }) => {
            return User.findOneAndDelete({ _id: userId });
        },
        removeCampaign: async (parent, { campaignId }) => {
            return Campaign.findOneAndDelete({ _id: campaignId});
        },
        removeItem: async (parent, { itemId }) => {
            return Inventory.findOneAndDelete({ _id: itemId})
        }
    },
};

module.exports = resolvers;
