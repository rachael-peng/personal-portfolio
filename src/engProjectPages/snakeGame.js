import React from 'react';
import '../pages.css';
import SnakeVideo from './snakeGameVideo.mp4'
import SnakePhoto from './snakeDesignConsideration.png'

function SnakeGamePage() {
    return (
      <div className='page'>
        <div className='headingContainer'>
          <div className="pageHeading">Snake Game</div>
        </div>
        <div>
          <p><strong>Created:</strong> April 2024</p>
          <p><strong>Ideated for:</strong> CPEN 333B - Software Design for Engineers</p>
          <p><strong>Description:</strong> Coded in Python. Classic snake game.</p>
        </div>

      <div style={{display: "inline-flex"}}>

      <video width="600" controls>
          <source src={SnakeVideo} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>

        <div></div>

        <img src={SnakePhoto} style={{ width: "600px"}}/>

      </div>

      </div>
    );
}

export default SnakeGamePage;
