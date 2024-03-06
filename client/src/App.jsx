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
    <div id="app-container" className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/player" element={<PlayerPage />} />
          <Route path="/tabletalk" element={<TableTalk />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </ApolloProvider>
  );
}


export default App;