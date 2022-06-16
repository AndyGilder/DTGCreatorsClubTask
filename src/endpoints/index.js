export const modListEndpoint = 'https://ugc-api.dovetailgames.com/mods?page=1&pageSize=12&sortBy=mostPopular';
export const specificModEndpoint = (id) => {
    return `https://ugc-api.dovetailgames.com/mods/${id}`
}