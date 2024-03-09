
// ** currently not in use ** issues with export/import

import { gql } from "@apollo/client";

 export const ADD_CHARACTER_MUTATION = gql`
  mutation AddCharacter($characterBackground: String!, $characterName: String!, $characterRace: String!, $characterClass: String!) {
    addCharacter(characterBackground: $characterBackground, characterName: $characterName, characterRace: $characterRace, characterClass: $characterClass) {
      _id
      characterName
      characterBackground
      characterRace
      characterClass
    }
  }
`;

 export const FETCH_CHARACTERS = gql`
  query FetchCharacters {
    characters {
      _id
      characterName
      characterRace
      characterClass
      characterBackground
    }
  }
`;

 export const FETCH_DETAIL_QUERY = gql`
  query FetchCharacter($characterId: ID!) {
    character(characterId: $characterId) {
        _id
        characterName
        characterBackground
        characterRace
        characterClass
        inventory {
          itemName
          collectedOn
        }
      }
  }
`;

