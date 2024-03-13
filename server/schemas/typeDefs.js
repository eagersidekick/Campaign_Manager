const typeDefs = `
  // User type
  type User {
    _id: ID
    username: String
    email: String
    password: String
    campaigns: [Campaign]!
  }
  // Character type
  type Character {
    _id: ID
    characterName: String
    playerName: String
    createdAt: String
    characterBackground: String
    characterRace: String
    characterClass: String
    inventory: [Inventory]!
    campaign: Campaign
  }

  //Inventory Type
  type Inventory {
    _id: ID
    itemName: String
    collectedOn: String
  }

  //Campaign Type
  type Campaign {
    _id: ID
    campaignName: String!
    campaignCreator: String
    createdAt: String
    characters: [Character]
  }

  //Used for login/signup authentication
  type Auth {
    token: ID!
    user: User
  }

  // Query types for users, characters, campaign, and inventory.
  type Query {
    users: [User]
    user(username: String!): User
    characters(username: String): [Character]
    character(characterId: ID!): Character
    characterInventory(characterId: ID!): [Inventory]
    charactersByCampaign(campaignId: ID!): [Character]
    campaigns: [Campaign]
    campaign(campaignId: ID!): Campaign
    me: User
  }

  // Mutation types to add/delete users, characters, campaign, and inventory.
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCharacter(
      characterBackground: String!,
      characterName: String!,
      characterRace: String!, 
      characterClass: String!,
      campaignId: ID!): Character
    removeCharacter(characterId: ID!): Character
    addCampaign(campaignName: String!): Campaign
    addCharacterToCampaign(characterId: ID!, campaignId: ID!): Character
    addCharacterInventory(characterId: ID!, itemName: String!): Inventory
    removeUser(userId: ID!): User
    removeCampaign(campaignId: ID!): Campaign
    removeItem(itemId: ID!): Inventory
  }
`;

module.exports = typeDefs;