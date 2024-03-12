import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import Auth from '../utils/auth'
import { useCampaign } from './campaignContext';
import {useQuery, gql} from '@apollo/client';

const GET_CAMPAIGN_ID = gql`
query GetCampaignById($campaignId: ID!) {
  campaign(campaignId: $campaignId) {
    _id
    campaignName
  }
}`


function Header() {
  var login;
  if(Auth.loggedIn())
  {
    login = <a className='bad-script-regular navbar-item' href="/" onClick={() => Auth.logout()}>Logout</a>
  }
  else
  {
    login = <Link className='bad-script-regular navbar-item' to='/login'>Login</Link>
  }
  const { selectedCampaignId } = useCampaign();
  const { data, loading, error } = useQuery(GET_CAMPAIGN_ID, {
    variables: { campaignId: selectedCampaignId },
    skip: !selectedCampaignId,
  });

  if (loading) return <p>Loading campaign name...</p>;
  if (error) console.log('No campaign selected');

  return (
    <header>
      <nav id="header" className='navbar'>
        <div className='navbar-brand'>

        <Link className='bad-script-regular navbar-item' to="/">Home</Link>
        <Link className='bad-script-regular navbar-item' to="/campaign">Campaign</Link>
        <Link className='bad-script-regular navbar-item' to="/diceroll">Roll Dice</Link>

        <Link className='bad-script-regular navbar-item' to="/player">Player Page</Link>
        <Link className='bad-script-regular navbar-item' to="/tabletalk">Table Talk</Link>
       {/* <Link className='navbar-item bad-script-regular' to="/test">testing character api</Link> */}
       {/* <Link className='navbar-item bad-script-regular cm' to={data?.campaign?.campaignName ? "/player" : "/campaign"}>{data?.campaign?.campaignName || 'No Campaign Selected'}</Link> */}


        </div>
        <div className='bad-script-regular navbar-end'>
          {login}
          <Link className='bad-script-regular navbar-item' to='/signup'>Sign-Up</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;