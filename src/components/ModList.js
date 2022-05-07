import './ModList.css';
import ModItem from './ModItem';

function ModList({ modList }) {
    return (
        <div className="mod-list">
            {
                modList.map(mod => (
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
                ))
            }
        </div>
    );
}

export default ModList;
