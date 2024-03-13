import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Campaign from './pages/Campaign';
import PlayerPage from './pages/PlayerPage';
import TableTalk from './pages/TableTalk';
import Login from './pages/Login';
import Signup from './pages/Signup';
import 'bulma/css/bulma.min.css';
import './App.css';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import CharactersPage from './pages/CharactersPage';
import DiceRoll from './pages/DiceRoll';
import CharacterDetails from './pages/CharacterDetails';
import { CampaignProvider } from './components/campaignContext';
import CampaignDetailsPage from './pages/CampaignDetails';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CampaignProvider> 
        {/* creates the background image for the app */}
      <div id="app-container" className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/campaign/:campaignId" element={<CampaignDetailsPage />} />
          <Route path="/player" element={<PlayerPage />} />
          <Route path="/tabletalk" element={<TableTalk />} />
          <Route path="/test" element={<CharactersPage />} />
          <Route path="/diceroll" element={<DiceRoll />} />
          <Route path="/character/:characterId" element={<CharacterDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </CampaignProvider>
    </ApolloProvider>
  );
}


export default App;