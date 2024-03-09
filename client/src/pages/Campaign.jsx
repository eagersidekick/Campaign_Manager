import Settings from '../components/Settings';
// import CampaignForm from '../components/CampaignForm';
import { useQuery, gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const GET_CAMPAIGNS = gql`
  query GetCampaigns {
    campaigns {
      _id
      campaignName
      campaignCreator
      createdAt
    }
  }
`;

const DELETE_CAMPAIGN = gql`
mutation RemoveCampaign($campaignId: ID!) {
  removeCampaign(campaignId: $campaignId) {
    _id
    campaignName
  }
}
`;


function Campaign() {
  const { loading, data, error, refetch } = useQuery(GET_CAMPAIGNS);
  const [deleteCampaign] = useMutation(DELETE_CAMPAIGN, {
    onCompleted: () => refetch(), // refetches campaigns after deletion
  });

  const navigate = useNavigate(); // to navigation on click
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);

  const handleSelectCampaign = (campaignId) => {
    setSelectedCampaignId(campaignId);
    console.log(`Campaign ${campaignId} selected`);

      // WIP logic to set the selected campaign as active
      // perhaps will add functionality to navigate to the player page or wherever the campaign should be active
    };
    const handleDeleteCampaign = async (campaignId) => {
      await deleteCampaign({
        variables: { campaignId },
      });
    };
  

  if (loading) return <p>Loading campaigns...</p>;
  if (error) return <p>Error loading campaigns: {error.message}</p>;

  return (
    <div className="content has-text-centered">
      <h1 className="title">Campaign Details</h1>
      <p className="subtitle is-6 pt-1">Viewing campaign: {
        <ul>
        {data.campaigns.map((campaign) => (
          <li key={campaign._id} >
            {campaign.campaignName} - Created by {campaign.campaignCreator}
            <span onClick={() => handleSelectCampaign(campaign._id)} style={{ cursor: 'pointer', marginLeft: '10px' }}>🔘</span>
            <span onClick={() => navigate(`/campaigns/${campaign._id}`)} style={{ cursor: 'pointer', marginLeft: '10px' }}>👁</span>
            <span onClick={() => handleDeleteCampaign(campaign._id)} style={{ cursor: 'pointer', marginLeft: '10px', color: 'red' }}>❌</span>
          </li>


        ))}
      </ul>
      }</p>
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
