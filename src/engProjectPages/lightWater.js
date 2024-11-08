import React from 'react';
import '../pages.css';
import lightWaterPhoto from './lightwaterphoto.png';

function LightWaterWebPage() {
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
            <p style={{
              display: "inline",
            }}>
              <strong>Try out the website here:&nbsp;</strong>
            </p>
            <p style={{
              display: "inline",
            }}>
              <a href="https://rachael-peng.github.io/light_water_igen_330/" style={{
                textDecoration: "underline",
                color: "blue",
              }}>
                https://rachael-peng.github.io/light_water_igen_330/
              </a>
            </p>
          </div>

          <br></br>

          <div>
            <img className='pageImgs' src={lightWaterPhoto}/>
          </div>

        </div>
    );
}

export default LightWaterWebPage;


