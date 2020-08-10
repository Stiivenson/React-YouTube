import * as types from '../../constants/types';


const initialState = {
    videos: [],
    query: '',
    totalResults: 0,
    videoView: 'grid',
    isEmpty: true
}

export default (state = initialState, {
    type,
    payload
}) => {
    switch (type) {

        case types.video.SEARCH:
            return {
                ...state,
                videos: payload.videos,
                    query: payload.query,
                    totalResults: payload.totalResults
            }

            case types.video.CHANGE_VIEW:
                return {
                    ...state,
                    videoView: payload
                }

                case types.video.SET_EMPTINESS:
                    return {
                        ...state,
                        isEmpty: false
                    }

                    case types.video.RESET:
                        return {
                            ...state,
                            videos: [],
                                query: '',
                                totalResults: 0,
                                videoView: 'list',
                                isEmpty: true
                        }


                        default:
                            return state
    }
}