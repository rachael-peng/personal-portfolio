import './App.css';
import { Link } from 'react-router-dom';
import React, { forwardRef } from 'react';
import emailImage from './connect/mail.png'

import { useRef, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Gear from './aboutMeIcons/engineering.png'
import Pipeline from './aboutMeIcons/pipeline.png'
import Leaves from './aboutMeIcons/sustainability.png'
import Star from './aboutMeIcons/xtar.png'

// const aboutMeIcons = require.context('./aboutMeIcons', true);
// const aboutMeIconsImages = aboutMeIcons.keys().map(image => aboutMeIcons(image));

const connectIcons = require.context('./connect', true);
const connectIconsImages = connectIcons.keys().map(image => connectIcons(image));

const connectImageData = [
  {
    src: connectIconsImages[0],
    url: 'https://www.linkedin.com/in/rachael-peng/',
    caption: 'linkedIn'
  },
];

const engineeringPortfolioImages = require.context('./engProjectImages', true);
const engineeringPortfolioImagesList = engineeringPortfolioImages.keys().map(image => engineeringPortfolioImages(image));

const engineeringPortfolio = [
  {
    imageSrc: engineeringPortfolioImagesList[1],
    link: '/lightWater',
    caption: 'light water installation'
  },
  {
    imageSrc: engineeringPortfolioImagesList[0],
    link: '/heatVest',
    caption: 'heat stroke prevention vest'
  },
  {
    imageSrc: engineeringPortfolioImagesList[3],
    link: '/snakeGame',
    caption: 'snake game'
  }
];

const uiuxPortfolioImages = require.context('./uiuxImages', true);
const uiuxPortfolioImagesList = uiuxPortfolioImages.keys().map(image => uiuxPortfolioImages(image));

const uiuxPortfolio = [
  {
    imageSrc: uiuxPortfolioImagesList[0],
    link: '/foodFriendly',
    caption: 'food friendly mobile app'
  },
  {
    imageSrc: uiuxPortfolioImagesList[1],
    link: '/lightWaterWeb',
    caption: 'light water web app'
  },
  {
    imageSrc: uiuxPortfolioImagesList[2],
    link: '/nook',
    caption: 'nook web app'
  }
]

const mediaPortfolioImages = require.context('./mediaImages', true);
const mediaPortfolioImagesList = mediaPortfolioImages.keys().map(image => mediaPortfolioImages(image));

const mediaPortfolio = [
  {
    imageSrc: mediaPortfolioImagesList[0],
    link: '/animation',
    caption: 'projection lighting animation with Activism through Art and Technology (ATTA) - click for more!'
  },
  {
    imageSrc: mediaPortfolioImagesList[1],
    link: '/socialMediaMarketing',
    caption: 'marketing & graphic design - click for more!'
  },
  {
    imageSrc: mediaPortfolioImagesList[2],
    link: '/video',
    caption: 'short video production with Student Alumni Council (SAC) - click for more!'
  }
]


const newExperiencesImages = require.context('./newExperiencesImages', true);
const newExperiencesImageList = newExperiencesImages.keys().map(image => newExperiencesImages(image));

const newExperiences = [
  {
    imageSrc: newExperiencesImageList[0],
    caption: 'career fair - co-director, company relations manager'
  },
  {
    imageSrc: newExperiencesImageList[1],
    caption: 'summer academic exchange at NTU'
  },
  {
    imageSrc: newExperiencesImageList[3],
    caption: 'jumpstart - senior orientation leader, orientation leader'
  },
  {
    imageSrc: newExperiencesImageList[2],
    caption: 'acapella enthusiast and soprano 1'
  }
]

const newThingsImages = require.context('./newThingsImages', true);
const newThingsImageList = newThingsImages.keys().map(image => newThingsImages(image));

const newThings = [
  {
    imageSrc: newThingsImageList[2],
    caption: 'previous high school STEM tutor'
  },
  {
    imageSrc: newThingsImageList[1],
    caption: 'learning Procreate digital art software'
  },
  {
    imageSrc: newThingsImageList[0],
    caption: "becoming a volunteer with brown bagging for Calgary's kids"
  }, 
]


const volunteerImages = require.context('./volunteerImages', true);
const volunteerImageList = volunteerImages.keys().map(image => volunteerImages(image));

const volunteer = [
  {
    imageSrc: volunteerImageList[2],
    caption: 'youth volunteer corps (youth central)'
  },
  {
    imageSrc: volunteerImageList[1],
    caption: 'calgary public library'
  },
  {
    imageSrc: volunteerImageList[0],
    caption: 'ams (student union) operations committee'
  }, 
]


// -----------------------------------------//
const AboutMe = forwardRef((_, ref) => {
    return (
      <main ref={ref} className='aboutMeContainer'>
        <div className="titleContainer">
          <div style={{
            fontFamily: "Lato",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: "400",
            marginBottom: "12px",
          }}>
            hello, thanks for visiting! i'm
          </div>
          <div style={{
            color: "#000",
            fontFamily: "Lato",
            fontSize: "76px",
            fontWeight: "700",
            textAlign: "left",
          }}>
            Rachael Peng
          </div>
        </div> 

        <table >
          <tbody>
          <tr>
            <td className='imageTD'>
              <img src={Gear} alt="gear" className='aboutMeImages'/>
            </td>
            <td>
              <p className='aboutMeText'>integrated engineering @ university of british columbia (vancouver) - specialties in chemical/biological and software</p>
            </td>
          </tr>
          <tr>
            <td className='imageTD'>
              <img src={Pipeline} alt="pipe" className='aboutMeImages'/>
            </td>
            <td>
            <p className='aboutMeText'>cathodic protection & pipeline integrity co-op @ atco gas - 1 year</p> <p className='aboutMeText'>analyst intern @ deloitte - 4 months</p>           </td>
          </tr>
          <tr>
            <td className='imageTD'>
              <img alt="leaf" src={Leaves} className='aboutMeImages'/>
            </td>
            <td>
            <p className='aboutMeText'>environmental sub-team lead @ engineers without borders</p>
            </td>
          </tr>
          <tr>
            <td className='imageTD'>
              <img src={Star} alt="star" className='aboutMeImages'/>
            </td>
            <td>
            <p className='aboutMeText'>adventurer, problem-solver, & travel-lover @ heart</p>
            </td>
          </tr>
          </tbody>
        </table>
      </main>
    );
});

const Heading = forwardRef(({ nameHeading }, ref) => {
  return (
    <div ref={ref} className="headingContainer">
      <div className="line"></div>
      <h1>{nameHeading}</h1>
      <div className="line"></div>
    </div>
  );
});

  
  // -----------------------------------------//
  function PortfolioHeader({headingName}) {
    return (
      <div className="portfolioHeaderContainer"><div className='maxWidth'>{headingName}</div></div>
    );
  }

  function AlsoHeader({headingName}) {
    return (
      <div className="alsoHeaderContainer"><div className='alsoMaxWidth'>{headingName}</div></div>
    );
  }
  
  function PortfolioItem({imageSrc, link, caption}) {
    return (
      < Link to={link} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt={caption} className="portoflioImage"/>
        <p>{caption}</p>
      </Link>
    );
  }

  function AlsoItem({imageSrc, caption}) {
    return (
      <div className="alsoItemBox">
        <img src={imageSrc} alt={caption} className="alsoImage"/>
        <p>{caption}</p>
      </div>
    );
  }

  function SpecialItem({imageSrc, link, caption}) {
    return (
      < Link to={link} className="alsoItemBox" target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt={caption} className="alsoImage"/>
        <p>{caption}</p>
      </Link>
    );
  }
  
  // -----------------------------------------//
  function Connect() {
    return (
      <div>
        {connectImageData.map((item, index) => (
          <ConnectImageLink
            key={index}
            imageSrc={item.src}
            url={item.url}
            caption={item.caption}
          />
        ))}
      </div> 
    );
  }

  function ConnectImageLink({ imageSrc, url, caption }) {
    return (
      <div className="connectCaptionContainer">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img key={imageSrc} src={imageSrc} alt={`It is ${imageSrc}`} className="connectImages" />
        </a>
        <p className="connectImageCaption">{caption}</p>
      </div>
    );
  }

  function EmailButton() {
    const emailAddress = 'rachaelpeng7@gmail.com';
  
    return (
      <div className="connectCaptionContainer" onClick={() => window.location.href = `mailto:${emailAddress}`}>
        <img className='connectImages' alt="emailicon" src={emailImage}/>
        <p className='connectImageCaption'>email</p>
      </div>
    );
  }
  
  
  // -----------------------------------------//

function HomePage() {
  const location = useLocation();
  const targetId = new URLSearchParams(location.search).get('targetId');
  
  const aboutMeRef = useRef(null);
  const portfolioRef = useRef(null);
  const alsoRef = useRef(null);
  const connectRef = useRef(null);

  console.log(targetId);

  useLayoutEffect(() => {
    const offset = 80;

    if (targetId === 'portfolio') { 
      if (portfolioRef.current) {
        const portfolioElementTop = portfolioRef.current.offsetTop - offset;
        window.scrollTo({
          top: portfolioElementTop,
          behavior: 'smooth'
        });
      }
    } else if (targetId === 'also') {
      if (alsoRef.current) {
        const alsoElementTop = alsoRef.current.offsetTop - offset;
        window.scrollTo({
          top: alsoElementTop,
          behavior: 'smooth'
        });
      }
    } else if (targetId === 'connect') {
      const connectElementTop = connectRef.current.offsetTop - offset;
        window.scrollTo({
          top: connectElementTop,
          behavior: 'smooth'
        });
    } else if (targetId === 'aboutMe') {
      const aboutMeElementTop = aboutMeRef.current.offsetTop - offset;
        window.scrollTo({
          top: aboutMeElementTop,
          behavior: 'smooth'
      });
    }
  }, [targetId]);

  return (
      <div className="App">
        <div>
          <AboutMe ref={aboutMeRef} id="aboutMeHeading"/>
          <main>
            <Heading ref={portfolioRef} id="portfolioHeading" nameHeading="portfolio"/>

            <div className='box'>
              <PortfolioHeader headingName="engineering projects"/>
              <div className="porfolioItemContainer">
                {engineeringPortfolio.map((item, index) => (
                  <PortfolioItem
                    key={index}
                    imageSrc={item.imageSrc}
                    link={item.link}
                    caption={item.caption}
                  />
                ))}
              </div>
            </div>

            <div></div>
            
            <div className='box'>
              <PortfolioHeader headingName="ui/ux design"/>
              <div className="porfolioItemContainer">
                {uiuxPortfolio.map((item, index) => (
                  <PortfolioItem
                    key={index}
                    imageSrc={item.imageSrc}
                    link={item.link}
                    caption={item.caption}
                  />
                ))}
              </div>
            
            </div>

            <div></div>
          </main>

          <main>
            <Heading id="alsoHeading" ref={alsoRef} nameHeading="i'm also..."/>
            <div className='box'>
              <AlsoHeader headingName="passionate about new experiences to expand my worldview"/>
              <div className="alsoItemContainer">
                {newExperiences.map((item, index) => (
                  <AlsoItem
                    key={index}
                    imageSrc={item.imageSrc}
                    caption={item.caption}
                  />
                ))}
              </div>
            </div>
            

            <div className='box'>
            <AlsoHeader headingName="a continuous learner and explorer"/>
            <div className="alsoItemContainer"> {newThings.map((item, index) => (
                <AlsoItem
                  key={index}
                  imageSrc={item.imageSrc}
                  caption={item.caption}
                />
              ))}
            </div>  
            </div> 


            <div className='box'>
              <AlsoHeader headingName="a visual artist"/>
              <div className="alsoItemContainer"> {mediaPortfolio.map((item, index) => (
                  <SpecialItem
                    key={index}
                    link={item.link}
                    imageSrc={item.imageSrc}
                    caption={item.caption}
                  />
                ))}
              </div>
            </div>



            <div className='box'>
            <AlsoHeader headingName="an avid volunteer"/>
            <div className="alsoItemContainer"> {volunteer.map((item, index) => (
                <AlsoItem
                  key={index}
                  imageSrc={item.imageSrc}
                  link={item.link}
                  caption={item.caption}
                />
              ))}
            </div>
            </div>

                       
          </main>

          <main>
            <Heading id="connectHeading" ref={connectRef} nameHeading="connect"/>
            <div className='connectContainer'>
              <Connect/>
              <EmailButton/>
            </div>
          </main>
        </div>
        <footer>
          <p style={{
            fontFamily: "Kulim Park",
            fontSize: "11px",
            fontWeight: "400",
          }}>
            coded in React and designed in Figma by Rachael Peng
          </p>
        </footer>
      </div>
  );
}
  
  export default HomePage;