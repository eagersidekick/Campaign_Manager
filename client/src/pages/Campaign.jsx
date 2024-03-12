// import { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';
import CampaignForm from '../components/CampaignForm';
// import Settings from '../components/Settings';
import { useCampaign } from '../components/campaignContext';

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

  const { selectedCampaignId, setSelectedCampaignId } = useCampaign(); // uses hook to get these

  const { loading, data, error, refetch } = useQuery(GET_CAMPAIGNS);
  const [deleteCampaign] = useMutation(DELETE_CAMPAIGN, {
    onCompleted: () => refetch(), // refetches campaigns after deletion
  });
  const navigate = useNavigate();

  const handleSelectCampaign = (campaignId) => {
    if (selectedCampaignId === campaignId) {
      setSelectedCampaignId(null); // deselects if the same campaign is clicked again
    } else {
      setSelectedCampaignId(campaignId); 
    }
  };

  const handleDeleteCampaign = async (campaignId) => {
    await deleteCampaign({
      variables: { campaignId },
    });
  };
  const handleDeselectCampaign = () => {
    setSelectedCampaignId(null);
  };


  if (!Auth.loggedIn()) {
    return <p>User is not logged in.</p>;
  }

  if (loading) return <p>Loading campaigns...</p>;
  if (error) return <p>Error loading campaigns: {error.message}</p>;


  return (
    <div className='character-container'>
    <div className="character-box content has-text-centered campaignContent">
      <h1 className="title bad-script-regular has-text-white">Campaign Details</h1>
      <button onClick={handleDeselectCampaign} style={{ marginBottom: '20px' }}>Deselect Campaign</button>

      <ul className="campaignList bad-script-regular">
        {data?.campaigns.map((campaign) => (
          <li className="campaignListPoints" key={campaign._id} style={{ border: campaign._id === selectedCampaignId ? '2px solid #4CAF50' : 'none', padding: '8px', cursor: 'pointer' }}>
            {campaign.campaignName} |
            <span onClick={() => handleSelectCampaign(campaign._id)}> 🔘 Select</span>
            <span onClick={() => navigate(`/campaign/${campaign._id}`)}> 👁 View</span>
            <span onClick={() => handleDeleteCampaign(campaign._id)} style={{ color: 'red' }}> ❌ Delete</span>
          </li>
        ))}
      </ul>
      <CampaignForm refetchCampaigns={refetch} />
      {/* <Settings selectedCampaignId={selectedCampaignId} /> */}
    </div>
    </div>
  );
}

export default Campaign;
