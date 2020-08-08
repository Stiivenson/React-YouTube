import React from 'react';

import { useSelector } from 'react-redux';

import './videos-grid.scss';

function VideosListGrid() {
  const { videos } = useSelector((state) => state.video);

  return (
    <div className='video-grid__wrapper'>
      {videos.map((video) => {
        return (
          <div className='video-grid__card' key={video.id.videoId}>
            <div className='video-grid__card__video-wrapper'>
              <iframe
                src={'https://www.youtube.com/embed/' + video.id.videoId}
                title={video.snippet.title}
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
            <div className='video-grid__card__title-wrapper'>
              <h3 className='video-grid__card__title'>{video.snippet.title}</h3>
              <p className='video-grid__card__subtitle'>{video.snippet.channelTitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VideosListGrid;
