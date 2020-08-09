import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Row, Col, Input, Popconfirm } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

import VideosContainer from '../videos';
import Modal from '../modal';

import { useSelector, useDispatch } from 'react-redux';
import { searchVideos } from '../../redux/actions/youtubeAction';

import './app.scss';

const { Search } = Input;

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isEmpty } = useSelector((state) => state.video);

  // Change page styles when showing videos
  let pageSearchContainerType = isEmpty ? 'shrinked' : '--shrinked';

  // Set visiblity for ModalWindow
  const [visible, setVisibility] = useState(false);
  const toggleModal = useCallback(() => {
    setVisibility(!visible);
  }, [visible]);

  // Set visiblity for Popconfirm
  const [popConfirm, setPopConfirm] = useState(false);
  const togglePopconfirm = () => {
    setPopConfirm(!popConfirm);
  };

  const iconHeart = (
    <Popconfirm
      title='Поиск сохранен в разделе "Избранное"'
      placement='bottom'
      okText='Перейти в раздел "Избранное"'
      cancelText='Отмена'
      onConfirm={() => history.push('/favorites')}
      onCancel={togglePopconfirm}
      visible={popConfirm}
    >
      <HeartOutlined
        className={`page-search__pannel__btn-modal ${isEmpty ? '' : '--active'}`}
        onClick={isEmpty ? null : setVisibility}
      />
    </Popconfirm>
  );

  return (
    <Row>
      <Col span={4} />
      <Col span={16}>
        <div className={`page-search__container ${pageSearchContainerType}`}>
          <h1>Поиск видео</h1>
          <Search
            placeholder='Что хотите посмотреть?'
            enterButton='Найти'
            size='large'
            suffix={iconHeart}
            defaultValue={''}
            onSearch={(value) => (value === '' ? null : dispatch(searchVideos(value)))}
          />
          <VideosContainer />
          <Modal visible={visible} toggleModal={toggleModal} togglePopconfirm={togglePopconfirm} />
        </div>
      </Col>
      <Col span={4} />
    </Row>
  );
}

export default App;
