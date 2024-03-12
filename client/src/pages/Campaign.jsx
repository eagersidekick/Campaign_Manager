import { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';
import CampaignForm from '../components/CampaignForm';
import Settings from '../components/Settings';
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
    setSelectedCampaignId(campaignId);
    console.log(`Campaign ${campaignId} selected`);
  };

  const handleDeleteCampaign = async (campaignId) => {
    await deleteCampaign({
      variables: { campaignId },
    });
  };

  if (!Auth.loggedIn()) {
    return <p>User is not logged in.</p>;
  }

  if (loading) return <p>Loading campaigns...</p>;
  if (error) return <p>Error loading campaigns: {error.message}</p>;


  return (
    <div className="content has-text-centered">
      <div className='section'>
        <h1 className="title">Campaign Details</h1>
        <ul>
          {data?.campaigns.map((campaign) => (
            <li key={campaign._id} style={{ border: campaign._id === selectedCampaignId ? '2px solid #4CAF50' : 'none', padding: '8px', cursor: 'pointer' }}>
              {campaign.campaignName} - Created by {campaign.campaignCreator}
              <span onClick={() => handleSelectCampaign(campaign._id)}> 🔘 Select</span>
              <span onClick={() => navigate(`/campaign/${campaign._id}`)}> 👁 View</span>
              <span onClick={() => handleDeleteCampaign(campaign._id)} style={{ color: 'red' }}> ❌ Delete</span>
            </li>
          ))}
        </ul>
        <CampaignForm refetchCampaigns={refetch} />
        {/* Optional: Pass selectedCampaignId and a method to refetch characters to Settings */}
        {/* <Settings selectedCampaignId={selectedCampaignId} /> */}
      </div>
    </div>
  );
}

export default Campaign;
