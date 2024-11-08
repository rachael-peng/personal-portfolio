import React from 'react';
import '../pages.css';
import lungVideo from "./BreathingLungs.mp4"
import treeVideo from "./BreathingTree.mp4"
import brightFlower from "./Flower - Bright.png"
import darkFlower from "./Flower - Dark.png"

function AnimationPage() {
    return (
      <div className='page'>
      <div className='headingContainer'>
        <div className="pageHeading">Projection Lighting Blender Animations</div>
      </div>
      <div className='descriptionContainer'>
        <p><strong>Created:</strong> January 2023 - January 2024</p>
        <p><strong>Ideated for:</strong> Activism Through Technology and Art (ATTA) Society - When Air Takes Shape (breathing origami sculpture)         </p>
        <p><strong>Description:</strong> Created dynamic, "breathing" animations in Blender for projection lighting on When Air Takes Shape sculpture.</p>

      </div>

      <br></br>

      <video width="600" controls>
        <source src={lungVideo} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <video width="600" controls>
        <source src={treeVideo} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      
      <br></br>
      <img style={{
        width: "250px",
      }} src={brightFlower}/>
      <img style={{
        width: "250px",
      }} src={darkFlower}/>

    </div>
    );
}

export default AnimationPage;


        



