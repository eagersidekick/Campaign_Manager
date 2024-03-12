import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_CAMPAIGN = gql`
  mutation AddCampaign($campaignName: String!) {
    addCampaign(campaignName: $campaignName) {
      _id
      campaignName
      characters {
        _id
        characterName
        inventory {
          _id
          itemName
        }
      }
    }
  }
`;

const GET_CAMPAIGNS = gql`
query FetchCamp {
    campaigns {
      _id
      campaignName
    }
}
`;
// const { data, loading, error } = useQuery(GET_CAMPAIGNS);

function CampaignForm() {
  const [campaignName, setCampaignName] = useState('');
  const [message, setMessage] = useState(''); 
  const [createdCampaignName, setCreatedCampaignName] = useState(''); // state to hold the name of the created campaign

  const [addCampaign, { loading, error }] = useMutation(ADD_CAMPAIGN, {
    variables: { campaignName },
    onCompleted: (data) => {
      setMessage('Campaign created successfully!');
      setCreatedCampaignName(data.addCampaign.campaignName); // saves the name of the created campaign
      setCampaignName(''); // clears the form input
    },
    onError: (error) => {
      setMessage(`Error creating campaign: ${error.message}`);
    },
    refetchQueries: [{ query: GET_CAMPAIGNS}],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // clears previous messages
    try {
      await addCampaign();
    } catch (error) {
      console.log('error', error)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='createCampaignForm bad-script-regular'>
          <label htmlFor="campaignName">Campaign Name:</label>
          <input
            id="campaignName"
            type="text"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            required
            className='input'
          />
          <button className='button' type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create Campaign'}
          </button>
        </div>
      </form>
      {/* {message && <p>{message}</p>} */}
      {createdCampaignName && <p>Campaign Added: {createdCampaignName}</p>} 
    </div>
  );
}


export default CampaignForm;

