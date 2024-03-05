const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    characters: [Character]!
    campaigns: [Campaign]!
  }

  type Character {
    _id: ID
    characterName: String
    playerName: String
    createdAt: String
    inventory: [Inventory]!
  }

  type Inventory {
    _id: ID
    itemName: String
    itemOwner: String
    collectedOn: String
  }

  type Campaign {
    _id: ID
    campaignName: String
    campaignCreator: String
    createdAt: String
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
    characterInventory: [Inventory]
    campaigns: [Campaign]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCharacter(characterBackground: String!): Character
    removeCharacter(characterId: ID!): Character
    addCampaign(campaignId: ID!, campaignName: String!): Campaign
  }
`;

module.exports = typeDefs;