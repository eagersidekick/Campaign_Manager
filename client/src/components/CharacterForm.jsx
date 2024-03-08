
import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_CHARACTER_MUTATION = gql`
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

function CharacterForm( {onCharacterCreated}) {
  const [characterDetails, setCharacterDetails] = useState({
    characterName: '',
    characterRace: '',
    characterClass: '',
    characterBackground: '',
  });
  const [addCharacter, { loading, error }] = useMutation(ADD_CHARACTER_MUTATION);
  if (error) {
    console.log('Error submitting', error.message);
  }

  const handleChange = (e) => {
    setCharacterDetails({
      ...characterDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const {data} = await addCharacter({
        variables: {
          characterName: characterDetails.characterName,
          characterRace: characterDetails.characterRace,
          characterClass: characterDetails.characterClass,
          characterBackground: characterDetails.characterBackground,
        },
      });
      alert('Character created successfully!');
      onCharacterCreated(data.addCharacter); 
      setCharacterDetails({ characterName: '', characterRace: '', characterClass: '', characterBackground: '' }); // resets form 
    } catch (err) {
      alert(`Failed to create character: ${err.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Character Name:
        <input
          type="text"
          name="characterName"
          value={characterDetails.characterName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Race:
        <input
          type="text"
          name="characterRace"
          value={characterDetails.characterRace}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Class:
        <input
          type="text"
          name="characterClass"
          value={characterDetails.characterClass}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Background:
        <textarea
          name="characterBackground"
          value={characterDetails.characterBackground}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" disabled={loading}>Create Character</button>
      {error && <p>An error occurred: {error.message}</p>}
    </form>
  );
}

export default CharacterForm;
