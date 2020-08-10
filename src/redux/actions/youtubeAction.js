import * as types from '../../constants/types';
import videosDefault from '../../constants/videos-default'

import axios from 'axios';

// Key for YouTube API
const KEY = 'AIzaSyDk0eBY11xZHzoTlmxnybvMxEoD8jfYtNg';

// Find videos from SearchPage-Input, default query
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

// Find videos with custom parametres
export const callSavedQuery = ({
    query,
    maxNumb,
    sort
}) => (dispatch) => {
    axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: maxNumb,
                q: query,
                order: sort,
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
                    query,
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


// Find videos with custom parametres
export const callDefaultQuery = ({
    query
}) => (dispatch) => {
    dispatch({
        type: types.video.SEARCH,
        payload: {
            videos: videosDefault,
            query,
            totalResults: 12
        }
    });
    dispatch({
        type: types.video.SET_EMPTINESS
    });
}