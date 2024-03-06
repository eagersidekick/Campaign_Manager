import CharacterForm from '../components/CharacterForm';
import Settings from '../components/Settings';

function PlayerPage() {
  return (
    <div className='content has-text-centered'>
      <h1 className='title'>Player Dashboard</h1>
      <p className='subtitle is-6 pt-1'>Manage your characters and join campaigns.</p>
      <div className="columns">
        <Settings />
        <div className='column'>
          <p className='subtitle'>Your Current Characters Here:</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis minus voluptates illo et ipsa reprehenderit cumque dolore nesciunt delectus suscipit expedita aliquam, illum consectetur repudiandae laboriosam. Nulla cum tempora sit.</p>
        </div>
        <div className='column'>
          <CharacterForm />
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
