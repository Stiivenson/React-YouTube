import React, { useState } from 'react';

import VideosListGrid from './videos-grid';
import VideosList from './videos-list';

import { useDispatch, useSelector } from 'react-redux';

import changeVideoView from '../../redux/actions/videoViewAction';

function VideosContainer() {
  const { query, totalResults, videoView } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const [gridButton, gridButtonChange] = useState('--active');
  const [listButton, listButtonChange] = useState('');

  const handleVideoViewClick = (target) => {
    let attribute = target.closest('svg').getAttribute('keyvalue');
    console.log(attribute);
    if (attribute !== null) {
      if (attribute === 'grid') {
        gridButtonChange('--active');
        listButtonChange('');
        dispatch(changeVideoView('grid'));
      } else if (attribute === 'list') {
        gridButtonChange('');
        listButtonChange('--active');
        dispatch(changeVideoView('list'));
      }
    } else return;
  };

  return (
    <>
      <div className='page-search__pannel'>
        <div className='page-search__pannel__title'>
          Видео по запросу&ensp; <span>«{query}»</span>
          <div className='page-search__pannel__title__total-results'>{totalResults}</div>
        </div>
        <div className='page-search__pannel__btns'>
          <svg
            onClick={(e) => handleVideoViewClick(e.target)}
            className={gridButton}
            keyvalue='grid'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M10 5H5V10H10V5Z'
              stroke='#272727'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M19 5H14V10H19V5Z'
              stroke='#272727'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M19 14H14V19H19V14Z'
              stroke='#272727'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M10 14H5V19H10V14Z'
              stroke='#272727'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <svg
            onClick={(e) => handleVideoViewClick(e.target)}
            className={listButton}
            keyvalue='list'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <g>
              <path
                d='M8 6H21'
                stroke='#272727'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M8 12H21'
                stroke='#272727'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M8 18H21'
                stroke='#272727'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M3 6H3.01'
                stroke='#272727'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M3 12H3.01'
                stroke='#272727'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M3 18H3.01'
                stroke='#272727'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </svg>
        </div>
      </div>
      {videoView === 'grid' ? <VideosListGrid /> : <VideosList />}
    </>
  );
}

export default VideosContainer;
