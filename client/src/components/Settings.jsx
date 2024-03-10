import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import '/src/App.css';

export default function Settings({ onOpenForm, characters }) {
    return (
        <div className="column is-one-fourth">
            <div className='section silver-text'>
                <p className="subtitle silver-text">Settings Bar</p>
                {characters.map((character) => (
                    <Link key={character._id} to={`/character/${character._id}`} className="character-link">
                    {character.characterName}
                  </Link>
                ))}
            </div>
            <button className='button' onClick={onOpenForm}>New Character</button>
        </div>
    );
}