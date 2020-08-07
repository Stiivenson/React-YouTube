import * as types from '../../constants/types';

const initialState = {
  login: '',
  isAuthenticated: false
};

export default (state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case types.auth.LOGIN_SUCCESS:
      return {
        ...state,
        login: payload.login,
          isAuthenticated: true
      };

    default:
      return state;
  }
};