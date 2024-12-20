import './App.css';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import HomePage from './homepage';

import LightWaterPage from './engProjectPages/lightWater';
import HeatVestPage from './engProjectPages/heatVest';
import SnakeGamePage from './engProjectPages/snakeGame';

import LightWaterWebPage from './uiuxPages/lightWaterWeb';
import FoodFriendlyPage from './uiuxPages/foodFriendly';
import NookPage from './uiuxPages/nookWeb';

import AnimationPage from './mediaPages/animation';
import SocialMediaMarketingPage from './mediaPages/marketing';
import VideoPage from './mediaPages/video';

// -----------------------------------------//

function AppLayout({ children }) {
  return (
    <div>
      <MenuBar/>
      {children}
    </div>
  );
}

// menubar

function MenuBar() {
  return (
    <nav className="menuBar">
      <div style={{ 
        paddingTop: "14px", paddingLeft: "93px", minWidth: "208px",
        fontFamily: "Kulim Park", fontSize: '32px', fontWeight: '400' }}>
          Rachael Peng
      </div>

      <Link className="menuNavHeaders" to={"/?targetId=aboutMe"} style={{marginLeft: "30vw"}}>about me</Link>
      <Link className="menuNavHeaders" to={"/?targetId=portfolio"}>portfolio</Link>
      <Link className="menuNavHeaders" to={"/?targetId=also"}> i'm also...</Link>
      <Link className="menuNavHeaders" to={"/?targetId=connect"}>connect</Link>
    </nav>
  )
}

function App() {
  return (
    <HashRouter>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Kulim+Park:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Kulim+Park:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"/>
      </header>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lightWater" element={<LightWaterPage />} />
          <Route path="/heatVest" element={<HeatVestPage />} />
          <Route path="/snakeGame" element={<SnakeGamePage />} />

          <Route path="/foodFriendly" element={<FoodFriendlyPage />} />
          <Route path="/lightWaterWeb" element={<LightWaterWebPage />} />
          <Route path="/nook" element={<NookPage />} />

          <Route path="/animation" element={<AnimationPage />} />
          <Route path="/socialMediaMarketing" element={<SocialMediaMarketingPage />} />
          <Route path="/video" element={<VideoPage />} />
        </Routes>
      </AppLayout>
    </HashRouter>  
  );
}

export default App;
