import React from 'react';
import MenuBar from '../App.js'; 

function SocialMediaMarketingPage() {
    return (
        <div>
            <MenuBar />
            <h1>SocialMediaMarketingPage</h1>
        </div>
    );
}

export default SocialMediaMarketingPage;

import React from 'react';
import '../pages.css';

function AnimationPage() {
    return (
      <div className='page'>
      <div className='headingContainer'>
        <div className="pageHeading">Light Water Web App</div>
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

    </div>
    );
}

export default AnimationPage;


        



