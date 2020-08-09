import React, { useState, useCallback } from 'react';

import { Row, Col, List, Typography, Button } from 'antd';

import { useSelector, useDispatch, useCallbak } from 'react-redux';

import './favorites.scss';

const { Title, Text } = Typography;

function Favorites() {
  const dispatch = useDispatch();
  const { queries } = useSelector((state) => state.query);

  return (
    <Row>
      <Col span={4} />
      <Col span={16}>
        <div className='page-favorites__container '>
          <Title>Избранное</Title>
          <List
            className='page-favorites__list'
            bordered
            dataSource={queries}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <div className='page-favorites__list__item'>
                  <Text strong>{item.title}</Text>
                  <Button type='dashed'>Выполнить</Button>
                </div>
                <div className='page-favorites__list__item'>
                  <Button type='primary'>Изменить</Button>
                  <Button type='primary' danger>
                    Удалить
                  </Button>
                </div>
              </List.Item>
            )}
          />
          {/* {queries.map((query) => {
            return <div key={query.id}>{query.title}</div>;
          })} */}
        </div>
      </Col>
      <Col span={4} />
    </Row>
  );
}

export default Favorites;
