import React from 'react';
import '../pages.css';


function FoodFriendlyPage() {
    return (
        <div className='page'>
          <div className='headingContainer'>
            <div className="pageHeading">Food Friendly Mobile App</div>
          </div>
          <div>
            <p><strong>Created:</strong> December 2023</p>
            <p><strong>Ideated for:</strong> COMR 280 - Entrepreneurship</p>
            <p><strong>Description:</strong> Meal planning and nutrition app for all everyday food-related needs. Designed in Figma.</p>
          </div>
        
          <div className='itemContainer'>
            <iframe
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              width={900}
              height={600}
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FVrJJd41bEHPFzN4Osyal1V%2FFood-Friendly-Mobile-App%3Ftype%3Ddesign%26node-id%3D45-1092%26t%3DINLhPAeL6I1KELYL-1%26scaling%3Dscale-down%26page-id%3D45%253A1091%26starting-point-node-id%3D45%253A1092%26mode%3Ddesign"
            />
            <iframe
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              width={900}
              height={600}
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FVrJJd41bEHPFzN4Osyal1V%2FFood-Friendly-Mobile-App%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DoF33U4JImO0iiypl-1"
            />
          </div>

          <div>
            
          </div>
        </div>
    );
}

export default FoodFriendlyPage;