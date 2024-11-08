import React from 'react';
import '../pages.css';

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
            <p><strong>Description:</strong> Design web app in Figma for dynamic, interactive engineering/art installation. Created to raise awareness for clean water availability challenges. 
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

          <div></div>
          <br></br>

          <div>
            <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width={900}
                height={600}
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fk2ExXeVZfCHCHNBOMyf47x%2FLight-Water%3Ftype%3Ddesign%26node-id%3D2-2%26t%3DOSh8rbOlLsiQGOuC-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A2%26mode%3Ddesign"
                allowFullScreen=""
              />
            <iframe
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              width={900}
              height={600}
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fk2ExXeVZfCHCHNBOMyf47x%2FLight-Water%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DGJsJkP0pZG2zgJxT-1"
              allowFullScreen=""
            />
          </div>
        </div>
    );
}

export default LightWaterWebPage;


