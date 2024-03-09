const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    campaigns: [Campaign]!
  }

  type Character {
    _id: ID
    characterName: String
    playerName: String
    createdAt: String
    characterBackground: String
    characterRace: String
    characterClass: String
    inventory: [Inventory]!
  }

  type Inventory {
    _id: ID
    itemName: String
    collectedOn: String
  }

  type Campaign {
    _id: ID
    campaignName: String
    campaignCreator: String
    createdAt: String
    characters: [Character]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    characters(username: String): [Character]
    character(characterId: ID!): Character
    characterInventory(characterId: ID!): [Inventory]
    campaigns: [Campaign]
    campaign(campaignId: ID!): Campaign
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCharacter(
      characterBackground: String!,
      characterName: String!,
      characterRace: String!, 
      characterClass: String!): Character
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