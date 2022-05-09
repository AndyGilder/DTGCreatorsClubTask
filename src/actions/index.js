import axios from "axios"

export const fetchModList = () => async (dispatch, getState) => {
    const modListEndpoint = 'https://ugc-api.dovetailgames.com/mods?page=1&pageSize=12&sortBy=mostPopular';

    const response = await axios.get(modListEndpoint);

    dispatch({
        type: 'FETCH_MOD_LIST',
        payload: response.data.data,
    });
};
