import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LightWater from './engProjectPages/lightWater';


const aboutMeIcons = require.context('./aboutMeIcons', true);
const aboutMeIconsImages = aboutMeIcons.keys().map(image => aboutMeIcons(image));

const connectIcons = require.context('./connect', true);
const connectIconsImages = connectIcons.keys().map(image => connectIcons(image));

const connectImageData = [
  {
    src: connectIconsImages[0],
    url: 'https://example.com/image1',
    caption: 'linkedIn'
  },
  {
    src: connectIconsImages[1],
    url: 'rachaelpeng7@gmail.com',
    caption: 'email'
  },
  // ... more image data objects
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
    link: './engProjectPages/heatVest.js',
    caption: 'heat stroke prevention vest'
  },
  {
    imageSrc: './engProjectImages/snakeGame.jpg',
    link: './engProjectPages/snakeGame.js',
    caption: 'snake game'
  }
];

const uiuxPortfolioImages = require.context('./uiuxImages', true);
const uiuxPortfolioImagesList = uiuxPortfolioImages.keys().map(image => uiuxPortfolioImages(image));

const uiuxPortfolio = [
  {
    imageSrc: uiuxPortfolioImagesList[0],
    link: '/lightWater',
    caption: 'food friendly mobile app'
  },
  {
    imageSrc: uiuxPortfolioImagesList[1],
    link: '',
    caption: 'light water web app'
  },
  {
    imageSrc: uiuxPortfolioImagesList[2],
    link: '',
    caption: 'nook web app'
  }
]

const mediaPortfolio = [
  { title: 'projection lighting animation', id: 3.1 },
  { title: 'social media marketing', id: 3.2 },
  { title: 'short video production', id: 3.3 },
]

// -----------------------------------------//

function MenuBar() {
  return (
    <nav className="menuBar">
      <a href="/" style={{ 
        paddingTop: "14px", paddingLeft: "93px", minWidth: "208px",
        fontFamily: "Kulim Park", fontSize: '32px', fontWeight: '400' }}>
          Rachael Peng
      </a>
      <a href="/" className="menuNavHeaders" style={{marginLeft: "calc(600px - 10vw)"}}>
        about me</a>
      <a href="/" className="menuNavHeaders">portfolio</a>
      <a href="/" className="menuNavHeaders" style={{paddingRight: "93px"}}>connect</a>
    </nav>
  )
}

function AboutMe() {
  return (
    <main className='aboutMeContainer'>
      <div>
        <p style={{
          fontFamily: "Lato",
          fontSize: "30px",
          fontStyle: "normal",
          fontWeight: "400",
        }}>
          hello, thanks for visiting! i'm
        </p>
        <p style={{
          color: "#000",
          fontFamily: "Lato",
          fontSize: "76px",
          fontWeight: "700",
          textAlign: "left",
        }}>
          Rachael Peng
        </p>
      </div> 
      <div className="aboutMeImageContainer">
        {aboutMeIconsImages.map((imageSrc, index) => (
          <img key={index} src={imageSrc} alt={`Image of ${imageSrc}`} className='aboutMeImages'/>
        ))}
      </div> 
      <div className="aboutMeListContainer">
        <p className='aboutMeText'>integrated engineering @ university of british columbia (vancouver) - specialties in software and biomedical, minor in commerce</p>
        <p className='aboutMeText'>cathodic protection & pipeline integrity co-op @ atco gas - 1 year work experience</p>
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

function PortfolioHeader({headingName}) {
  return (
    <div className="portfolioHeaderContainer"><div className='maxWidth'>{headingName}</div></div>
  );
}

function PortfolioItem({imageSrc, link, caption}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={imageSrc} alt={caption} className="portoflioImage"/>
      <p>{caption}</p>
    </a>
  );
}

function Connect() {
  return (
    <div className="connectContainer">
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

function BackTop() {
  return (
    <p s>back to the top</p>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lightWater" element={<LightWater />} />
        {/* <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} /> */}
      </Routes>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Kulim+Park:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Kulim+Park:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"/>
      </header>
      <MenuBar/>

      <div className="App">
        <body>
          <AboutMe/>
          
          <main>
            <Heading nameHeading="portfolio"/>

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
            
            <PortfolioHeader headingName="ui/ux design"/>
              <div>
                {uiuxPortfolio.map((item, index) => (
                  <PortfolioItem
                    key={index}
                    imageSrc={item.imageSrc}
                    link={item.link}
                    caption={item.caption}
                  />
                ))}
              </div>

            <PortfolioHeader headingName="graphic design, art, video"/>
            <div>
              {mediaPortfolio.map((item, index) => (
                <PortfolioItem
                  key={index}
                  imageSrc={item.imageSrc}
                  link={item.link}
                  caption={item.caption}
                />
              ))}
            </div>
          </main>

          <main>
            <Heading nameHeading="let's connect"/>
            <Connect/>
            <BackTop/>
          </main>
        </body>
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
    </BrowserRouter>  
  );
}

export default App;
