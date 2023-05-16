import React from 'react';
import Theme from './theme/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import PartyScreen from './screens/PartyScreen';
import SongsScreen from './screens/SongsScreen';

function App() {

  document.body.style.backgroundColor = Theme.colorBackground;
  document.body.style.color = Theme.colorOnBackground;

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path='about' element={<AboutScreen />} />
        <Route path='party/:id' element={<PartyScreen />} />
        <Route path='songs' element={<SongsScreen />} />
        <Route path='*' element={404} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
