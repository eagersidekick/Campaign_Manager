import CharacterForm from '../components/CharacterForm';
import Settings from '../components/Settings';
import 'bulma/css/bulma.min.css';
import '/src/App.css'

function PlayerPage() {
  return (
    <div className='content has-text-centered'>
      <p className='title silver-text'>Player Dashboard</p>
      <div className="columns">
        <Settings />
        <div className="column silver-text">
          <p className='subtitle silver-text'>Your Current Characters Here:</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis minus voluptates illo et ipsa reprehenderit cumque dolore nesciunt delectus suscipit expedita aliquam, illum consectetur repudiandae laboriosam. Nulla cum tempora sit.</p>
        </div>
        <CharacterForm />
      </div>
    </div>
  );
}

export default PlayerPage;
