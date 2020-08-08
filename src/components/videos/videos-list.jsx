import React from 'react';

import { useSelector } from 'react-redux';

import './videos-list.scss';

function VideosList() {
  const { videos } = useSelector((state) => state.video);

  return (
    <div className='video-list__wrapper'>
      List
      {videos.map((video) => {
        return (
          <div className='video-list__card' key={video.id.videoId}>
            <div className='video-list__card__video-wrapper'>
              <iframe
                src={'https://www.youtube.com/embed/' + video.id.videoId}
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
            <div className='video-list__card__title-wrapper'>
              <h3 className='video-list__card__title'>{video.snippet.title}</h3>
              <p className='video-list__card__subtitle'>{video.snippet.channelTitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VideosList;
