import React, { useState, useEffect } from 'react';
import '../pages.css';

const videos = require.context('./videos', false, /\.(mp4|webm|ogg)$/);
const videoSrcs = videos.keys().map(video => videos(video));


function VideoGallery() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    Promise.all(videoSrcs)
      .then(videoUrls => setVideos(videoUrls))
      .catch(error => console.error('Error loading videos:', error));
  }, [videoSrcs]);

  return (
    <div>
      {videos.map((videoUrl, index) => (
        <video width="300" key={index} controls>
          <source src={videoUrl} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
}

function VideoPage() {
    return (
      <div className='page'>
      <div className='headingContainer'>
        <div className="pageHeading">Short Video Production</div>
      </div>
      <div className='descriptionContainer'>
        <p><strong>Description: </strong>Created and edited short TikToks and other video content as part of UBC Student Alumni Council (SAC) Media Production Sub-Committee</p>
      </div>

      <br></br>
      <VideoGallery/>

    </div>
    );
}

export default VideoPage;

        



