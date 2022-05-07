import './ModItem.css';

function ModItem({
    modId,
    modTitle,
    modCategory,
    modLongDesc,
    modRatingsCount,
    modThumbnail,
    modSubsCount,
    modTags,
}) {
    return (
        <a href={`https://ugc-api.dovetailgames.com/mods/${modId}`} className="mod-item">
            <div>Title: {modTitle}</div>
            <div>Category: {modCategory}</div>
            <div>Long description: {modLongDesc}</div>
            <div>Ratings count: {modRatingsCount}</div>
            <div>Subs count: {modSubsCount}</div>
            <img src={modThumbnail} width="591" height="332" alt="Mod thumbnail" />
            <br />
        </a>
    );
}

export default ModItem;
