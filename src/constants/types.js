export const auth = {
    USER_LOADING: 'auth/user/loading',
    USER_LOADED: 'auth/user/loaded',
    USER_LOADING_FAIL: 'auth/loading/fail',

    LOGIN_SUCCESS: 'login/success',
    LOGIN_FAIL: 'login/fail',
    LOGOUT_SUCCESS: 'logout/success'
};

export const user = {
    GET_USER: 'user/get',
    RECET_USER: 'user/recet',

    GET_MAPS: 'user/get/maps',
    CREATE_MAP: 'user/map/create',
    DELETE_MAP: 'user/map/delete',

    GET_RECENT_MAPS: 'user/get/recent',
    ADD_RECENT_MAP: 'user/map/recent/add',

    GET_TRASH_MAPS: 'user/get/trash',
    ADD_TRASH_MAP: 'user/map/trash/add',
    REVIVE_MAP: 'user/map/trash/revive'
};