import { useQuery, gql } from '@apollo/client';
import { useCampaign } from '../components/campaignContext';

import { useParams } from 'react-router-dom';

const GET_CAMPAIGN_CHARACTERS = gql`
  query GetCampaignCharacters($campaignId: ID!) {
    campaign(campaignId: $campaignId) {
      _id
      campaignName
      characters {
        _id
        characterName
        characterRace
        characterClass
        inventory {
          _id
          itemName
        }
      }
    }
  }
`;

const CampaignDetails = () => {
    const { campaignId } = useParams();
  const { loading, error, data } = useQuery(GET_CAMPAIGN_CHARACTERS, {
    variables: { campaignId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <div className='character-container'>
  <div className='character-box'>
    <h2 className='bad-script-regular'>Campaign: {data.campaign.campaignName}</h2>
    <div className="character-grid">
      {data.campaign.characters.map((char) => (
        <div key={char._id} className="character-card">
          <h3>{char.characterName}</h3>
          <p>Race: {char.characterRace}</p>
          <p>Class: {char.characterClass}</p>
          <div className="character-inventory">
            <p>Inventory:</p>
            
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


  );
 };

export default CampaignDetails;
