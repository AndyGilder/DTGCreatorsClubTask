import './ModList.css';
import { useState } from 'react';
import ModItem from './ModItem';

function ModList({ modList }) {
    const [state, setState] = useState({
        searchTerm: '',
    });

    const modItems = modList.filter((mod) => {
        let returnedMods;

        if (state.searchTerm === '') {
            returnedMods = mod;
        } else if (mod.title.toLowerCase().includes(state.searchTerm.toLowerCase())) {
            returnedMods = mod;
        }

        return returnedMods;
    }).map(mod => (
        <ModItem
            key={mod.id}
            modId={mod.id}
            modTitle={mod.title}
            modCategory={mod.category}
            modLongDesc={mod.longDescription}
            modRatingsCount={mod.ratingsCount}
            modThumbnail={mod.thumbnail}
            modSubsCount={mod.subscriberCount}
            modTags={mod.tags}
        />
    ));

    return (
        <>
            <h1 className="mod-list-header">Mod List</h1>

            <div className="mod-search-container">
                <input type="text" placeholder="Search mods" className="mod-list-search" onChange={event => { setState({ searchTerm: event.target.value }) }} />
            </div>

            <div className="mod-list">
                { modItems }
            </div>
        </>
    );
}

export default ModList;
