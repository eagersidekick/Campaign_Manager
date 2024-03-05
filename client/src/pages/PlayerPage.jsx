import Settings from '../components/Settings';

function PlayerPage() {
  return (
    <div className='content has-text-centered'>
      <h1 className='title'>Player Dashboard</h1>
      <div className="columns">
        <Settings />
        <div className="column">
          <p className='subtitle'>Manage your characters and join campaigns.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quam vero fugit necessitatibus eos accusantium saepe voluptas ut, est voluptatibus eveniet modi quaerat dicta optio, tenetur quibusdam aliquam amet aperiam?</p>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
