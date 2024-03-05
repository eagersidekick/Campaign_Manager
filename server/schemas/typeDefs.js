const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    characters: [Character]!
  }

  type Character {
    _id: ID
    characterName: String
    playerName: String
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
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCharacter(characterText: String!): Character
    removeCharacter(characterId: ID!): Character
  }
`;

module.exports = typeDefs;