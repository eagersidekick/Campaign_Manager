import CharacterForm from '../components/CharacterForm';
import CharacterList from '../components/CharacterList';
import Settings from '../components/Settings';
import 'bulma/css/bulma.min.css';
import '/src/App.css'

function PlayerPage() {
  return (
    <div className='content has-text-centered'>
      <p className='title silver-text'>Player Dashboard</p>
      <p className="subtitle is-6 pt-1 silver-text">View your characters and such</p>
      <div className="columns section">
        <Settings />
        {/* <CharacterList /> */}
        <CharacterForm />
      </div>
    </div>
  );
}

export default PlayerPage;
