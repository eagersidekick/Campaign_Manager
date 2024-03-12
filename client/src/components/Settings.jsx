import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import '/src/App.css';

export default function Settings({ onOpenForm, characters }) {
    return (
        // <div className="">
        <div className="character-container">
            <div className='character-box'>
                <p className="subtitle text-color">Character List</p>
                <div className="nameList">
                {characters.map((character) => (
                    <Link key={character._id} to={`/character/${character._id}`} className="">
                    {character.characterName}
                  </Link>
                ))}
                </div>
            </div>
            <button className='button' onClick={onOpenForm}>New Character</button>
        </div>
        // </div>
    );
}