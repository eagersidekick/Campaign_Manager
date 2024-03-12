
import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useCampaign } from '../components/campaignContext';
const ADD_CHARACTER_MUTATION = gql`
  mutation AddCharacter($characterBackground: String!, $characterName: String!, $characterRace: String!, $characterClass: String!, $campaignId: ID!) {
    addCharacter(characterBackground: $characterBackground, characterName: $characterName, characterRace: $characterRace, characterClass: $characterClass, campaignId: $campaignId) {
      _id
      characterName
      campaign {
        _id
        campaignName
        characters {
          _id
          characterName
        }
      }
    }
  }
`;

function CharacterForm({ onCharacterCreated, campaigns }) {
  const { selectedCampaignId } = useCampaign();
  const [message, setMessage] = useState('');
  const [characterDetails, setCharacterDetails] = useState({
    characterName: '',
    characterRace: '',
    characterClass: '',
    characterBackground: '',
  });
  const [addCharacter, { loading, error }] = useMutation(ADD_CHARACTER_MUTATION, {
    onCompleted: () => {
      setMessage('Character created successfully!');
    },
    onError: (error) => {
      setMessage(`Please select a campaign first: ${error.message}`);
    },
  });

  const handleChange = (e) => {
    setCharacterDetails({
      ...characterDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!selectedCampaignId) {
      setMessage('Campaign ID is required');
      return;
    }
    try {
      const { data } = await addCharacter({
        variables: { ...characterDetails, campaignId: selectedCampaignId,
         },
      });
      console.log('selected campaign', selectedCampaignId)
      onCharacterCreated && onCharacterCreated(data.addCharacter);
      setCharacterDetails({ characterName: '', characterRace: '', characterClass: '', characterBackground: '' }); // resets form 
    } catch (err) {
      console.log(`Failed to create character: ${err.message}`);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <label className='label'>
        Character Name:
        <input
          type="text"
          name="characterName"
          value={characterDetails.characterName}
          onChange={handleChange}
          required
          className='input'
        />
      </label>
      <label className='label'>
        Race:
        <input
          type="text"
          name="characterRace"
          value={characterDetails.characterRace}
          onChange={handleChange}
          required
          className='input'
        />
      </label>
      <label className='label'>
        Class:
        <input
          type="text"
          name="characterClass"
          value={characterDetails.characterClass}
          onChange={handleChange}
          required
          className='input'
        />
      </label>
      <label className='label'>
        Background:
        <textarea
          name="characterBackground"
          value={characterDetails.characterBackground}
          onChange={handleChange}
          required
          className='textarea'
        />
      </label>
      <input
  type="hidden"
  name="campaignId"
  value={selectedCampaignId} 
/>

      {campaigns && campaigns.length > 0 && (
  <label>
    Campaign:
    <select
      name="campaignId"
      value={characterDetails.campaignId}
      onChange={handleChange}
      required
    >
      <option value="">Select a Campaign</option>
      {campaigns.map((campaign) => (
        <option key={campaign._id} value={campaign._id}>{campaign.campaignName}</option>
      ))}
    </select>
  </label>
      )}
      <button type="submit" disabled={loading} className='button'>Create Character</button>
      {message && <div className="success-message">{message}</div>}

    </form>
  );
}

export default CharacterForm;
