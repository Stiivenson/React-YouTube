import * as types from '../../constants/types';
import database from '../../constants/db';

import axios from 'axios';

import {
  authUser,
  checkToken
} from './lS-authUser';

const db = database;

export const login = ({
  login,
  password
}) => (dispatch) => {

  let checkUser = false;
  db.map((user) => {
    if (user.login === login) {
      if (user.password === password) {
        return checkUser = true;
      }
    }
  });

  checkUser === true ? dispatch({
    type: types.auth.LOGIN_SUCCESS,
    payload: {
      login: login
    }
  }) : dispatch({
    type: types.auth.LOGIN_FAIL
  });

  authUser(login);
};

export const loadUser = () => dispatch => {
  const {
    login
  } = checkToken();
  console.log('LOGIN', login);

  if (login !== '') {
    dispatch({
      type: types.auth.LOGIN_SUCCESS,
      payload: {
        login: login
      }
    });
  } else return null;
}

export const logout = () => dispatch => {
  // dispatch({
  //   type: types.auth.LOGOUT_SUCCESS
  // });
  // dispatch({
  //   type: types.user.RECET_USER
  // });
  // dispatch({
  //   type: types.map.RECET_MAP
  // });
  // dispatch({
  //   type: types.docTree.REMOVE_DATA
  // });
  // dispatch({
  //   type: types.textEditor.REMOVE_DATA
  // });
};