import * as types from '../../constants/types';

// Change video-view, between grid / list
const changeVideoView = (payload) => ({
    type: types.video.CHANGE_VIEW,
    payload
});

export {
    changeVideoView as
    default
}