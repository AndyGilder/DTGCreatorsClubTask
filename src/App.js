import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import ModList from './components/ModList';
import ModDetails from './components/ModDetails';
import PageNotFound from './components/PageNotFound';

const modListEndpoint = 'https://ugc-api.dovetailgames.com/mods?page=1&pageSize=12&sortBy=mostPopular';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ModList />} />
          <Route path="/ModDetails/:id" element={<ModDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
