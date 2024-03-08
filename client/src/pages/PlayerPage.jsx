import { useState } from 'react';

import CharacterForm from '../components/CharacterForm';
import Settings from '../components/Settings';
import 'bulma/css/bulma.min.css';
import '/src/App.css'

function PlayerPage() {
  const [latestCharacter, setLatestCharacter] = useState(null);

  const handleCharacterCreated = (character) => {
    setLatestCharacter(character);
  };
  
  return (
    <div className='content has-text-centered'>
      <p className='title silver-text'>Player Dashboard</p>
      <div className="columns">
        <Settings />
        <div className="column silver-text">
          <p className='subtitle silver-text'>Your Current Characters Here:</p>
          {/* Conditionally renders the latest character if it exists */}
          {latestCharacter && (
            <div>
              <p>Name: {latestCharacter.characterName}</p>
              <p>Race: {latestCharacter.characterRace}</p>
              <p>Class: {latestCharacter.characterClass}</p>
              <p>Background: {latestCharacter.characterBackground}</p>
            </div>
          )}
        </div>
        <CharacterForm onCharacterCreated={handleCharacterCreated} />
      </div>
    </div>
  );
}

export default PlayerPage;
