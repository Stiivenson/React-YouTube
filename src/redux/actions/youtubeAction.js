import * as types from '../../constants/types';

import axios from 'axios';


const KEY = 'AIzaSyA8SV9rKMnShujXbhsFl2EFe8bpzW3EmAY';

export const searchVideos = (q) => (dispatch) => {
    axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 20,
                q: q,
                "relevanceLanguage": "ru",
                key: KEY
            }
        })
        .then(res => {
            console.log(res);
            dispatch({
                type: types.video.SEARCH,
                payload: {
                    videos: res.data.items,
                    query: q,
                    totalResults: res.data.pageInfo.totalResults
                }
            });
            dispatch({
                type: types.video.SET_EMPTINESS
            });
        })
        .catch(err => {
            console.log(err);
        });
}

export {
    searchVideos as
    default
}