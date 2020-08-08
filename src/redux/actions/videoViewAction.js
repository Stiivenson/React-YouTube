import * as types from '../../constants/types';

const changeVideoView = (payload) => ({
    type: types.video.CHANGE_VIEW,
    payload
});

export {
    changeVideoView as
    default
}