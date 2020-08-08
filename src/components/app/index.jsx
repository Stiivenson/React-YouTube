import React from 'react';

import { Row, Col, Input } from 'antd';

import VideosContainer from '../videos';

import { useSelector, useDispatch } from 'react-redux';
import searchVideos from '../../redux/actions/youtubeAction';

import './app.scss';

const { Search } = Input;

function App() {
  const dispatch = useDispatch();
  const { isEmpty } = useSelector((state) => state.video);

  let pageSearchContainerType = isEmpty ? 'shrinked' : '--shrinked';

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
            onSearch={(value) => dispatch(searchVideos(value))}
          />
          <VideosContainer />
        </div>
      </Col>
      <Col span={4} />
    </Row>
  );
}

export default App;
