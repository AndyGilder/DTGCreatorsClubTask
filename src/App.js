import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import ModList from './components/ModList';
import ModDetails from './components/ModDetails';
import PageNotFound from './components/PageNotFound';
import LoadingSpinner from './components/LoadingSpinner';

const modListEndpoint = 'https://ugc-api.dovetailgames.com/mods?page=1&pageSize=12&sortBy=mostPopular';

function App() {
  const [ state, setState ] = useState({
    modList: [],
  });
  const [ loadingSpinner, showLoadingSpinner, hideLoadingSpinner ] = LoadingSpinner();

  useEffect(() => {
    showLoadingSpinner();
    axios.get(modListEndpoint)
      .then(response => {
        setState({ modList: response.data.data });

        hideLoadingSpinner();
        // TODO: Pagination from response.data
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <Router>
      <div className="App">
        { loadingSpinner }

        <Routes>
          <Route path="/" element={<ModList modList={state.modList} />} />
          <Route path="/ModDetails/:id" element={<ModDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
