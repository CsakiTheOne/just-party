import React from 'react';
import Theme from './theme/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import PartyScreen from './screens/PartyScreen';
import SettingsScreen from './screens/SettingsScreen';
import NewPartyScreen from './screens/NewPartyScreen';
import SongsScreen from './screens/SongsScreen';

function App() {

  document.body.style.backgroundColor = Theme.colorBackground;
  document.body.style.color = Theme.colorOnBackground;

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path='about' element={<AboutScreen />} />
        <Route path='settings' element={<SettingsScreen />} />
        <Route path='songs' element={<SongsScreen />} />
        <Route path='party/:id' element={<PartyScreen />} />
        <Route path='party/new' element={<NewPartyScreen />} />
        <Route path='party/new/:id' element={<NewPartyScreen />} />
        <Route path='*' element={404} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
