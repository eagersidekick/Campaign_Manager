import Settings from '../components/Settings';
// import CharacterForm from '../components/CharacterForm';
import CampaignInfo from '../components/CampaignInfo';
import 'bulma/css/bulma.min.css';
import '/src/App.css'


function Campaign() {

  return (
    <div className="content has-text-centered silver-text">
      <h1 className="title silver-text">Campaign Details</h1>
      <p className="subtitle is-6 pt-1 silver-text">Viewing campaign: { }</p>
      <div className="columns section">
        <Settings />
        <CampaignInfo />
      </div>
    </div>
  );
}

export default Campaign;
