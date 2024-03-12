import React from 'react';
// import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';
import { useCampaign } from './campaignContext';
import { useQuery, gql } from '@apollo/client';

const GET_CAMPAIGN_ID = gql`
query GetCampaignById($campaignId: ID!) {
  campaign(campaignId: $campaignId) {
    _id
    campaignName
  }
}`

function Footer() {
  const { selectedCampaignId } = useCampaign();
  const { data, loading, error } = useQuery(GET_CAMPAIGN_ID, {
    variables: { campaignId: selectedCampaignId },
    skip: !selectedCampaignId,
  });
  if (loading) return <p>Loading campaign name...</p>;
  if (error) console.log('No campaign selected');

  return (
    <footer id="footer" className='footer'>
      <div className='content has-text-centered'>
      <Link className='bad-script-regular navbar-item cm' to={data?.campaign?.campaignName ? "/player" : "/campaign"}>{data?.campaign?.campaignName || 'No Campaign Selected'}</Link>


      </div>
    </footer>
  );
}

export default Footer;