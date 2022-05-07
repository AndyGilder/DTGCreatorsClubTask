function ModItem({
    modTitle,
    modCategory,
    modLongDesc,
    modRatingsCount,
    modThumbnail,
    modSubsCount,
    modTags,
}) {
    return (
        <div>
            <div>Title: {modTitle}</div>
            <div>Category: {modCategory}</div>
            <div>Long description: {modLongDesc}</div>
            <div>Ratings count: {modRatingsCount}</div>
            <div>Subs count: {modSubsCount}</div>
            <img src={modThumbnail} width="591" height="332" />
            <br />
        </div>
    );
}

export default ModItem;
