import React from 'react';
import Theme from './theme/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import PartyScreen from './screens/PartyScreen';

function App() {

  document.body.style.backgroundColor = Theme.colorBackground;

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path='about' element={<AboutScreen />} />
        <Route path="/party/:id" element={<PartyScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
