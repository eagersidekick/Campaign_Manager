import Settings from '../components/Settings';
import CharacterForm from '../components/CharacterForm';


function Campaign() {

  return (
    <div className="content has-text-centered">
      <h1 className="title">Campaign Details</h1>
      <div className="columns">
        <Settings />
        <div className="column">
        <p className="subtitle">Viewing campaign: {}</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum fugiat reiciendis unde hic non, eveniet nulla porro quo, corrupti tempora aperiam aspernatur tenetur, dolorum voluptatibus ea ipsa aliquam. Minima, non.</p>
        </div>
        {/* <div className='column'>
         <CharacterForm />
        </div> */}
      </div>
    </div>
  );
}

export default Campaign;
