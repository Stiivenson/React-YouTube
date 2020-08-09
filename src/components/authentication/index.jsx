import React from 'react';

import AuthenticationFrom from './authentication-form';

import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../../redux/actions/authAction';

import logo from '../../static/svg/sibdev-logo.svg';
import './authentication.scss';

const Authentication = () => {
  const dispath = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  // Check, if User has token
  React.useEffect(() => {
    dispath(loadUser());
  });

  return (
    <div className={'page-auth__wrapper'}>
      <div className={`page-auth__form-container`}>
        <img className='page-auth__form__logo' src={logo} alt='logo' />
        <h3 className='page-auth__form__title'>Вход</h3>
        <AuthenticationFrom />
      </div>
    </div>
  );
};

export default Authentication;
