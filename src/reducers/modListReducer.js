const initialState = {
    modList: [],
    loading: false,
    error: null,
}

const modListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MOD_LIST_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_MOD_LIST_SUCCESS':
            return {
                ...state,
                loading: false,
                modList: action.payload,
            };
        case 'FETCH_MOD_LIST_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error,
                modList: [],
            };
        default:
            return state;
    };
};

export default modListReducer;