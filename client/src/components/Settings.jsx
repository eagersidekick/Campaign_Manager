import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import '/src/App.css';

export default function Settings({ onOpenForm, characters }) {
    return (
        // <div className="">
            <div className="character-container">
            <div className='character-box campaignContent'>
                <h1 className="title text-color">Character List</h1>
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