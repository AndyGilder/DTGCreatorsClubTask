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
            <div className="mod-details-container">
                <img src={modThumbnail} alt="Mod thumbnail" className="mod-thumbnail" />
                <div className="mod-meta-data">
                    <div className="mod-title">{modTitle}</div>
                    <div className="mod-category">{modCategory}</div>
                    <div>{modSubsCount} subscribers</div>
                </div>
            </div>
        </a>
    );
}

export default ModItem;
