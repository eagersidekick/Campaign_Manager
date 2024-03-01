import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Campaign from './pages/Campaign';
import PlayerPage from './pages/PlayerPage';
import TableTalk from './pages/TableTalk';

import 'bulma/css/bulma.min.css';

function App() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaign/:campaignId" element={<Campaign />} />
          <Route path="/player" element={<PlayerPage />} />
          <Route path="/tabletalk" element={<TableTalk />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
  

export default App;