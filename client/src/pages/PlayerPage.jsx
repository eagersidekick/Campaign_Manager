import { useState } from 'react';

import CharacterForm from '../components/CharacterForm';
import Settings from '../components/Settings';
import Modal from '../components/Modal';
import 'bulma/css/bulma.min.css';
import '/src/App.css'

function PlayerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [characters, setCharacters] = useState([]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const addNewCharacter = (newCharacter) => {
    setCharacters([...characters, newCharacter]);
    toggleModal(); 
  };

  return (
    <div className='content has-text-centered'>
      <Settings onOpenForm={toggleModal} characters={characters} />
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <CharacterForm onCharacterCreated={addNewCharacter} />
        </Modal>
      )}
    </div>
  );
}


export default PlayerPage;
