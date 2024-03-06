import CharacterForm from '../components/CharacterForm';
import Settings from '../components/Settings';

function PlayerPage() {
  return (
    <div className='content has-text-centered'>
      {/* <h1>Player Dashboard</h1> */}
      <div className="columns">
        <div className='padding column is-one-quarter'>
        <Settings />
        <div className="column is-three-quarters silver-text">
          <p className='silver-text'>Player Dashboard</p>
          <div className='columns'>
            <div className='column'>
              <p className='subtitle silver-text'>Your Current Characters Here:</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis minus voluptates illo et ipsa reprehenderit cumque dolore nesciunt delectus suscipit expedita aliquam, illum consectetur repudiandae laboriosam. Nulla cum tempora sit.</p>
            </div>
            <div className='column'>
              <CharacterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PlayerPage;
