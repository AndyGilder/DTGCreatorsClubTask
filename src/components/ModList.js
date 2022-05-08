import './ModList.css';
import ModItem from './ModItem';

function ModList({ modList }) {
    const modItems = modList.map(mod => (
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
        <div className="mod-list">
            { modItems }
        </div>
    );
}

export default ModList;
