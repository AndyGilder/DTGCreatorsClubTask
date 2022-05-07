import { useState, useEffect } from 'react';
import ModList from './components/ModList';
import axios from 'axios';

const modListEndpoint = 'https://ugc-api.dovetailgames.com/mods?page=1&pageSize=12&sortBy=mostPopular';
// const specificMod = 'https://ugc-api.dovetailgames.com/mods/256';

function App() {
  const [ modList, setModList ] = useState([]);

  useEffect(() => {
    axios.get(modListEndpoint)
      .then(response => {
        setModList(response.data.data);

        // TODO: Pagination from response.data
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      <h1>Mod List</h1>

      <ModList modList={modList} />
    </div>
  );
}

export default App;
