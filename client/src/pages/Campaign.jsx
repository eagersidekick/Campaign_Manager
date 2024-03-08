import Settings from '../components/Settings';
import CampaignForm from '../components/CampaignForm';

function Campaign() {

  return (
    <div className="content has-text-centered">
      <h1 className="title">Campaign Details</h1>
      <p className="subtitle is-6 pt-1">Viewing campaign: {}</p>
      <div className="columns">
        {/* <Settings /> */}
        {/* settings bar for campaign is a WIP atm */}
        <div className="column">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum fugiat reiciendis unde hic non, eveniet nulla porro quo, corrupti tempora aperiam aspernatur tenetur, dolorum voluptatibus ea ipsa aliquam. Minima, non.</p>
        </div>
        <div className='column'>
         <CampaignForm /> </div>
      </div>
    </div>
  );
}

export default Campaign;
