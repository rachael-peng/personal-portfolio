import React from 'react';
import '../pages.css';
function NookPage() {
    return (
        <div className='page'>
          <div className='headingContainer'>
            <div className="pageHeading">nook Web App</div>
          </div>
        <div>
          <p><strong>Role:</strong> UX/UI Designer (Team of 4)</p>
          <p><strong>Created:</strong> March 2024</p>
          <p><strong>Ideated for:</strong> nwHacks cmd-f 24-hour Hackathon</p>
          <p><strong>Description:</strong> Forum for community interactions and support about varying topics. App allows you
          to send "whispers," or messages to members of the app. Designed in Figma.<br></br>Inspired by this saying: "They say in ancient times, people would go into the mountains and the forests to find a tree hole, and tell the tree hole their secrets, then seal the hole with some mud, and the secrets would stay there forever."</p>
        </div>
    
      <div className='itemContainer'>
      <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width={1000}
          height={600}
          src="https://embed.figma.com/design/THhihNtUttilnTuofHOfXr/cmd-f?node-id=0-1&embed-host=share"
          allowFullScreen=""
        />


      <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        width={1000}
        height={600}
        src="https://embed.figma.com/proto/THhihNtUttilnTuofHOfXr/cmd-f?node-id=12-27&node-type=frame&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&embed-host=share"
        allowFullScreen=""
      />
      </div>
    </div>
    );
}

export default NookPage;
