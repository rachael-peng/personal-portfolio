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
        <p><strong>Team Leader and Founder</strong></p>
        <p><strong>Created:</strong> September 2023 - April 2024</p>
        <p><strong>Ideated for:</strong> IGEN 330 - Year Long Engineering Project Design</p>
        <p><strong>Description:</strong> Design dynamic, interactive engineering/art installation controlled by web app. Created to raise awareness for clean water availability challenges. Physical components include welded aluminum frame, stepper motors and drivers, LED lights, edge-lit laser cut acrylic, power outlet plug, pH and turbidity water sensors, etc.
        Create web app control state (lights, motion, sounds) of corresponding installation according to clean water data. Skills: Figma, HTML, CSS, Javascript, HTTP communication, Arduino, C++.
        </p>

      </div>

      <br></br>
      <VideoGallery/>

    </div>
    );
}

export default VideoPage;

        



