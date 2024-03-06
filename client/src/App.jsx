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


function App() {
  return (
    <div className='App silver-text'>
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
  );
}


export default App;