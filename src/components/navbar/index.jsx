import React from 'react';

import { Row, Col, Menu } from 'antd';

import './navbar.scss';

function Navbar() {
  const [clicked, handleClick] = React.useState('search');

  return (
    <>
      <Menu mode='horizontal'>
        <Row>
          <Col span={4} />
          <Col span={6}>
            <Menu onClick={(e) => handleClick(e.key)} selectedKeys={clicked} mode='horizontal'>
              <Menu.Item key='search'>Поиск</Menu.Item>
              <Menu.Item key='favorites'>Избранное</Menu.Item>
            </Menu>
          </Col>
          <Col span={9} />
          <Col span={1}>
            <Menu onClick={(e) => handleClick(e.key)} selectedKeys={clicked} mode='horizontal'>
              <Menu.Item key='exit'>Выход</Menu.Item>
            </Menu>
          </Col>
          <Col span={4} />
        </Row>
      </Menu>
    </>
  );
}

export default Navbar;
