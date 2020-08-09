import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { Row, Col, Menu } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/authAction';

import './navbar.scss';

function Navbar() {
  // Use location to change active Menu.Item
  const location = useLocation();
  const { pathname } = location;

  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      {isAuthenticated ? (
        <Menu mode='horizontal'>
          <Row>
            <Col span={4} />
            <Col span={6}>
              <Menu selectedKeys={[pathname]} mode='horizontal'>
                <Menu.Item key='/'>
                  <Link to='/'>Поиск</Link>
                </Menu.Item>
                <Menu.Item key='/favorites'>
                  <Link to='/favorites'>Избранное</Link>
                </Menu.Item>
              </Menu>
            </Col>
            <Col span={9} />
            <Col span={1}>
              <Menu selectedKeys={[pathname]} mode='horizontal'>
                <Menu.Item key='exit' onClick={() => dispatch(logout())}>
                  Выход
                </Menu.Item>
              </Menu>
            </Col>
            <Col span={4} />
          </Row>
        </Menu>
      ) : null}
    </>
  );
}

export default Navbar;
