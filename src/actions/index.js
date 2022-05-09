import axios from "axios"

export const fetchModList = () => async (dispatch, getState) => {
    dispatch({
        type: 'FETCH_MOD_LIST_REQUEST',
    });

    try {
        const modListEndpoint = 'https://ugc-api.dovetailgames.com/mods?page=1&pageSize=12&sortBy=mostPopular';

        const response = await axios.get(modListEndpoint);

        dispatch({
            type: 'FETCH_MOD_LIST_SUCCESS',
            payload: response.data.data,
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_MOD_LIST_FAILURE',
            error: error.message,
        });
    }
};


// export const fetchModList = () => async (dispatch, getState) => {
//     const modListEndpoint = 'https://ugc-api.dovetailgames.com/mods?page=1&pageSize=12&sortBy=mostPopular';

//     const response = await axios.get(modListEndpoint);

//     dispatch({
//         type: 'FETCH_MOD_LIST',
//         payload: response.data.data,
//     });
// };
