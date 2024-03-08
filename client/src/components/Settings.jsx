import 'bulma/css/bulma.min.css';
import '/src/App.css';

export default function Settings({ onOpenForm, characters }) {
    return (
        <div className="column is-one-fourth">
            <div className='section silver-text'>
                <p className="subtitle silver-text">Settings Bar</p>
                {characters.map((character) => (
                    <p className='list-item' key={character._id}>{character.characterName}</p>
                ))}
            </div>
            <button className='button' onClick={onOpenForm}>New Character</button>
        </div>
    );
}