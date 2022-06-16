const initialState = {
    modDetails: {},
    galleryImages: [],
    tags: [],
    modOwner: <></>,
    loading: false,
    error: null,
}

const modDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MOD_DETAILS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_MOD_DETAILS_SUCCESS':
            return {
                ...state,
                loading: false,
                modDetails: action.payload.modDetails,
                galleryImages: action.payload.galleryImages,
                tags: action.payload.tags,
                modOwner: action.payload.modOwner,
            };
        case 'FETCH_MOD_DETAILS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error,
                modDetails: [],
            };
        default:
            return state;
    };
};

export default modDetailsReducer;