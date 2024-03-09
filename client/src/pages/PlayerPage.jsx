import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { gql } from "@apollo/client";

import CharacterForm from '../components/CharacterForm';
import Settings from '../components/Settings';
import Modal from '../components/Modal';
import 'bulma/css/bulma.min.css';
import '/src/App.css';

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

function PlayerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loading, data, error, refetch } = useQuery(FETCH_CHARACTERS);
  const [addCharacter] = useMutation(ADD_CHARACTER_MUTATION, {
    onCompleted: () => refetch(), // Refetch characters after adding a new one to update the list
  });

  // Toggle modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Function to be called from CharacterForm on character creation
  const handleAddNewCharacter = async (characterData) => {
    try {
      await addCharacter({
        variables: {
          characterName: characterData.characterName,
          characterRace: characterData.characterRace,
          characterClass: characterData.characterClass,
          characterBackground: characterData.characterBackground,
        },
      });
      toggleModal(); // Close the modal upon successful creation
    } catch (error) {
      console.error('Error adding new character:', error);
    }
  };

  if (loading) return <p>Loading characters...</p>;
  if (error) return <p>Error fetching characters: {error.message}</p>;

  return (
    <div className='content has-text-centered'>
      <Settings onOpenForm={toggleModal} characters={data?.characters || []} />
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <CharacterForm onCharacterCreated={handleAddNewCharacter} />
        </Modal>
      )}
    </div>
  );
}

export default PlayerPage;
