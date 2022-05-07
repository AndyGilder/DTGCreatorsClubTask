import { useState, useEffect } from 'react';
import axios from 'axios';
import ModList from './components/ModList';
import LoadingSpinner from './components/LoadingSpinner';

const modListEndpoint = 'https://ugc-api.dovetailgames.com/mods?page=1&pageSize=12&sortBy=mostPopular';
// const specificMod = 'https://ugc-api.dovetailgames.com/mods/256';

function App() {
  const [ modList, setModList ] = useState([]);
  const [ loadingSpinner, showLoadingSpinner, hideLoadingSpinner ] = LoadingSpinner();
  
  useEffect(() => {
    showLoadingSpinner();
    axios.get(modListEndpoint)
      .then(response => {
        setModList(response.data.data);
        
        hideLoadingSpinner();
        // TODO: Pagination from response.data
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      { loadingSpinner }
      <ModList modList={modList} />
    </div>
  );
}

export default App;
