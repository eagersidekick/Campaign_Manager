import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import '/src/App.css';

export default function Settings({ onOpenForm, characters, handleDeleteCharacter }) {
    return (
        // <div className="">
        <div className="character-container">
            <div className='character-box'>
                <p className="bad-script-regular subtitle text-color">Character List</p>
                <div className="bad-script-regular nameList">
                {characters.map((character) => (
                    <div key={character._id} className=''> 
                    <Link to={`/character/${character._id}`} className="">
                    {character.characterName} |
                  </Link>
                  <span onClick={() => handleDeleteCharacter(character._id)} style={{ color: 'red', cursor: 'pointer' }}> ❌Delete</span> </div>
                ))}
                </div>
            </div>
            <button className='button' onClick={onOpenForm}>New Character</button>
        </div>
        // </div>
    );
}