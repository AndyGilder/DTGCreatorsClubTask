import './ModList.css';
import { useState } from 'react';
import ModItem from './ModItem';

function ModList({ modList }) {
    const [searchTerm, setSearchTerm] = useState('');

    const modItems = modList.filter((mod) => {
        let returnedMods;

        if (searchTerm === '') {
            returnedMods = mod;
        } else if (mod.title.toLowerCase().includes(searchTerm.toLowerCase())) {
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
            <input type="text" placeholder="Search mods" className="mod-list-search" onChange={event => { setSearchTerm(event.target.value) }} />

            <div className="mod-list">
                { modItems }
            </div>
        </>
    );
}

export default ModList;
