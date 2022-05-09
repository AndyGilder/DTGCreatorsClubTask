const initState = [];

const modListReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_MOD_LIST':
            return action.payload;
        default:
            return state;
    }
}

export default modListReducer;
