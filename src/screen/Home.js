import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Libraries from './Library';
import Trending from './Trending';
import Feed from './Feed';
import Favorites from './Favorites';
import Player from './Player';
import './Home.css';
import Sidebar from '../components/sidebar/Sidebar';
const Home = () => {
  return (
    <Router>
      <div className='main-body'>
        <Sidebar /> {/* i say flex here to display the sidebar on the left and other routes next to it  */}
      <Routes>
        <Route path='/' element={<Libraries />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/player' element={<Player />} />


      </Routes>
      </div>
    </Router>
  );
};

export default Home;
