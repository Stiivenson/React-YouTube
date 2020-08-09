import * as types from '../../constants/types';

const initialState = {
  login: '',
  isAuthenticated: false,
  loginFailed: false
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

    case types.auth.LOGOUT_SUCCESS:
      return {
        ...state,
        login: '',
          isAuthenticated: false,
          loginFailed: false
      }

      case types.auth.LOGIN_FAIL:
        return {
          ...state,
          loginFailed: true
        }

        default:
          return state;
  }
};