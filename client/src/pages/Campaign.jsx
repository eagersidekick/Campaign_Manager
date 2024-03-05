import Settings from '../components/Settings';

function Campaign() {

  return (
    <div className="content">
      <h1 className="title">Campaign Details</h1>
      <div className="columns">
        <Settings />
        <div className="column">
        <p className="subtitle">Viewing campaign: {campaignId}</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum fugiat reiciendis unde hic non, eveniet nulla porro quo, corrupti tempora aperiam aspernatur tenetur, dolorum voluptatibus ea ipsa aliquam. Minima, non.</p>
        </div>
      </div>
    </div>
  );
}

export default Campaign;
