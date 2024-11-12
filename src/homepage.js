import './App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import emailImage from './connect/mail.png'

const aboutMeIcons = require.context('./aboutMeIcons', true);
const aboutMeIconsImages = aboutMeIcons.keys().map(image => aboutMeIcons(image));

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
  // {
  //   imageSrc: './engProjectImages/snakeGame.jpg',
  //   link: '/snake game',
  //   caption: 'snake game'
  // }
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
    caption: 'projection lighting animation'
  },
  {
    imageSrc: mediaPortfolioImagesList[1],
    link: 'socialMediaMarketing',
    caption: 'social media marketing'
  },
  {
    imageSrc: mediaPortfolioImagesList[2],
    link: '/video',
    caption: 'short video production'
  }
]


// -----------------------------------------//
function AboutMe() {
    return (
      <main className='aboutMeContainer'>
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
        <div className="aboutMeImageContainer">
          {aboutMeIconsImages.map((imageSrc, index) => (
            <img key={index} src={imageSrc} alt={`Image of ${imageSrc}`} className='aboutMeImages'/>
          ))}
        </div> 
        <div className="aboutMeListContainer">
          <p className='aboutMeText'>integrated engineering @ university of british columbia (vancouver) - specialties in software and biomedical, minor in commerce</p>
          <p className='aboutMeText'>cathodic protection & pipeline integrity co-op @ atco gas - 1 year</p>
          <p className='aboutMeText'>environmental sub-team lead @ engineers without borders</p>
          <p className='aboutMeText'>sustainability driven, visual artist, & travel-lover @ heart</p>
        </div>
      </main>
  
    );
  }
  
function Heading({nameHeading}) {
  return (
    <div className="headingContainer">
      <div className="line"></div>
      <h1>{nameHeading}</h1>
      <div className="line"></div>
    </div>
  );
}
  
  // -----------------------------------------//
  function PortfolioHeader({headingName}) {
    return (
      <div className="portfolioHeaderContainer"><div className='maxWidth'>{headingName}</div></div>
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
          <img key={imageSrc} src={imageSrc} alt={`Image of ${imageSrc}`} className="connectImages" />
        </a>
        <p className="connectImageCaption">{caption}</p>
      </div>
    );
  }

  function EmailButton() {
    const emailAddress = 'rachaelpeng7@gmail.com';
  
    return (
      <div className="connectCaptionContainer" onClick={() => window.location.href = `mailto:${emailAddress}`}>
        <img className='connectImages' src={emailImage}/>
        <p className='connectImageCaption'>email</p>
      </div>
    );
  }
  
  
  // -----------------------------------------//
  
  function HomePage() {
    return (
        <div className="App">
          <div>
            <AboutMe/>
            <main>
              <Heading nameHeading="portfolio"/>
  
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
              <PortfolioHeader headingName="ui/ux design"/>
              </div>
  
              <div></div>
  
              <div className='box'>
                <PortfolioHeader headingName="graphic design, art, video"/>
                <div className="porfolioItemContainer">
                  {mediaPortfolio.map((item, index) => (
                    <PortfolioItem
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
              <Heading nameHeading="connect"/>
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