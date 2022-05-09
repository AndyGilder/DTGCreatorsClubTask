import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchModList } from '../actions';
import ModItem from './ModItem';
import './ModList.css';

function ModList() {
    const dispatch = useDispatch();
    const globalState = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchModList());
    }, [dispatch])

    const [state, setState] = useState({
        searchTerm: '',
    });

    const renderModList = () => {
        return globalState.modList?.filter((mod) => {
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
    }

    const renderLoading = () => {
        if (globalState.loading) {
            return <div className="loading-spinner-container"><div className="loading-spinner"></div></div>;
        }

        return (
            <>
                <h1 className="mod-list-header">Mod List</h1>

                <div className="mod-search-container">
                    <input type="text" placeholder="Search mods" className="mod-list-search" onChange={event => { setState({ searchTerm: event.target.value }) }} />
                </div>

                <div className="mod-list">
                    { renderModList() }
                </div>
            </>
        )
    }

    return (
        <>
            { renderLoading() }
        </>
    );
}

export default ModList;
