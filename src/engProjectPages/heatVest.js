import React from 'react';
import '../pages.css';
import heatVestPoster from "./heatVestPoster.png";
import heatVestPerson from "./heatVestPerson.png";

function HeatVestPage() {
    return (
      <div className='page'>
      <div className='headingContainer'>
        <div className="pageHeading">Heat Stroke Prevention Vest</div>
      </div>
    <div>
      <p><strong>Created:</strong> September 2022 - April 2023</p>
      <p><strong>Ideated for:</strong> IGEN 230 - Year Long Engineering Project Design</p>
      <p><strong>Description:</strong> Cooling vest that activates when heat stroke risk is calculated for athletes and labour workers.</p>
    </div>
    <div>

    </div>
      <img className="pageImgs" src={heatVestPoster}/>
      <img className="pageImgs" src={heatVestPerson}/>
    </div>
    );
}

export default HeatVestPage;
