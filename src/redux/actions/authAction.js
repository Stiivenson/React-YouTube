import * as types from '../../constants/types';
import database from '../../constants/db';

import {
  authUser,
  checkToken
} from './lS-authUser';

import {
  loadQuery
} from './lS-manageQueries';

const db = database;

// Login from authenticationForm
export const login = ({
  login,
  password
}) => (dispatch) => {

  // Check user's registration in DB
  let checkUser = false;
  db.map((user) => {
    if (user.login === login) {
      if (user.password === password) {
        return checkUser = true;
      }
    }
  });

  if (checkUser) {
    dispatch({
      type: types.auth.LOGIN_SUCCESS,
      payload: {
        login: login
      }
    });
    authUser(login);
    dispatch(loadQuery(login));
  } else {
    dispatch({
      type: types.auth.LOGIN_FAIL
    });
  }
};

// Check if User has token - for auto-login
export const loadUser = () => dispatch => {
  const {
    login
  } = checkToken();
  console.log('LOGIN', login);

  if (login !== '') {
    dispatch(loadQuery(login));
    dispatch({
      type: types.auth.LOGIN_SUCCESS,
      payload: {
        login: login
      }
    });
  } else return null;
}

// Logout from App
export const logout = () => (dispatch, getState) => {
  const {
    login
  } = getState().user;

  // Remove token
  let user_collection = JSON.parse(localStorage.getItem('user_collection'));
  user_collection.map((user) => {
    if (user.login === login) {
      user.token = '';
    }
  });
  localStorage.setItem('user_collection', JSON.stringify(user_collection));

  dispatch({
    type: types.auth.LOGOUT_SUCCESS
  });
  dispatch({
    type: types.video.RESET
  });
}