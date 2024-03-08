
// used to test characters api

import { useQuery, gql } from '@apollo/client';

const FETCH_CHARACTERS = gql`
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

function CharactersPage() {
  const { loading, error, data } = useQuery(FETCH_CHARACTERS);

  if (loading) return <p>Loading characters...</p>;
  if (error) return <p>Error loading characters: {error.message}</p>;

  return (
    <div>
      <h2>Characters</h2>
      <ul>
        {data.characters.map((character) => (
          <li key={character._id}>
            <p>Name: {character.characterName}</p>
            <p>Race: {character.characterRace}</p>
            <p>Class: {character.characterClass}</p>
            <p>Background: {character.characterBackground}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharactersPage;
