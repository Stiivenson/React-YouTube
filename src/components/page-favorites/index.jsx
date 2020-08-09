import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Row, Col, List, Typography, Button } from 'antd';

import Modal from '../modal';

import { useSelector, useDispatch } from 'react-redux';
import { callSavedQuery } from '../../redux/actions/youtubeAction';
import { deleteQuery } from '../../redux/actions/lS-manageQueries';

import './favorites.scss';

const { Title, Text } = Typography;

function Favorites() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { queries } = useSelector((state) => state.query);

  // Set visiblity for ModalWindow
  const [visible, setVisibility] = useState(false);

  const [query, setQuery] = useState({
    query: { id: '', title: '', query: '', sort: '', maxNumb: null },
  });

  const toggleModal = useCallback(() => {
    setVisibility(!visible);
  }, [visible]);

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
                <Text strong>{item.title}</Text>
                <div className='page-favorites__list__btns-container'>
                  <Button
                    type='dashed'
                    onClick={() => {
                      dispatch(callSavedQuery(item));
                      history.push('/');
                    }}
                  >
                    Выполнить
                  </Button>
                  <div className='page-favorites__list__btns-container__btn-grp'>
                    <Button
                      type='primary'
                      onClick={() => {
                        setQuery({
                          ...query,
                          query: {
                            id: item.id,
                            title: item.title,
                            query: item.query,
                            sort: item.sort,
                            maxNumb: item.maxNumb,
                          },
                        });
                        setVisibility(true);
                      }}
                    >
                      Изменить
                    </Button>
                    <Button type='primary' danger onClick={() => dispatch(deleteQuery(item.id))}>
                      Удалить
                    </Button>
                  </div>
                </div>
              </List.Item>
            )}
          />
          <Modal visible={visible} mode={'edit'} toggleModal={toggleModal} selectedQuery={query} />
        </div>
      </Col>
      <Col span={4} />
    </Row>
  );
}

export default Favorites;
