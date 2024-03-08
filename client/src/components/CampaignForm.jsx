import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_CAMPAIGN_MUTATION = gql`
  mutation AddCampaign($campaignId: ID!, $campaignName: String!) {
    addCampaign(campaignId: $campaignId, campaignName: $campaignName) {
      _id
      campaignName
      campaignCreator
    }
  }
`;

function CampaignForm() {
  const [campaignDetails, setCampaignDetails] = useState({
    name: '',
  });
  const [addCampaign, { loading, error, data }] = useMutation(ADD_CAMPAIGN_MUTATION);

  const handleChange = (e) => {
    setCampaignDetails({
      ...campaignDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCampaign({
        variables: {
          name: campaignDetails.name,
          creator: creatorId,
        },
      });
      alert('Campaign created successfully!');
      setCampaignDetails({ name: '', race: '', class: '', background: '' }); // resets form after success
    } catch (err) {
      alert(`Failed to create campaign: ${err.message}`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Campaign Name:
        <input
          type="text"
          name="name"
          value={campaignDetails.name}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Create Campaign</button>
    </form>
  );
}

export default CampaignForm;
