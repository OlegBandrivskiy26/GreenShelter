export const upSearchResults = (query) => {
    return {
        type: 'UPDATE_SEARCH_RESULTS',
        payload: query
    }
}