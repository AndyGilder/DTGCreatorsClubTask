import axios from "axios"
import { modListEndpoint, specificModEndpoint } from "../endpoints";

export const fetchModList = () => async (dispatch, getState) => {
    dispatch({
        type: 'FETCH_MOD_LIST_REQUEST',
    });

    try {
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

export const fetchModDetails = (id) => async (dispatch) => {
    dispatch({
        type: 'FETCH_MOD_DETAILS_REQUEST',
    });

    try {
        const specificMod = specificModEndpoint(id);

        const response = await axios.get(specificMod);

        const galleryImages = [];
        const tags = [];

        Object.values(response.data.data.tags).forEach((tag) => {
            tags.push({ id: tag.id, name: tag.name });
        });

        response.data.data.screenshots.map((screenshot) => (
            galleryImages.push({ original: screenshot.url })
        ))

        function getUserProfile(owner) {
          let username = '';
          let displayName = '';
          let discriminator = '';

          for (const [key, value] of Object.entries(owner)) {
            if (key === 'username') {
              username = value;
            } else if (key === 'displayName') {
              displayName = value;
            } else if (key === 'discriminator') {
              discriminator = value;
            }
          }

          return <a className="mod-owner" href={`https://creatorsclub.dovetailgames.com/profile/${displayName}-${discriminator}/`} target="_blank" rel="noreferrer">{username}</a>;
        }

        dispatch({
            type: 'FETCH_MOD_DETAILS_SUCCESS',
            payload: {
                modDetails: response.data.data,
                galleryImages,
                tags,
                modOwner: await getUserProfile(response.data.data.owner),
            }
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_MOD_DETAILS_FAILURE',
            error: error.message,
        })
    }
}