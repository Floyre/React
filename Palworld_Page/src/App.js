import React, { useState } from 'react';
import topbg from './resource/back.jpg';
import FullBack from './resource/full-back.jpg';
import PalLogo from './resource/pal-logo.png';
import NamuIcon from './resource/namu.png';
import RedditIcon from './resource/reddit-icon.png';
import DcIcon from './resource/dcinside-logo.png';
import BigContentThumbnail from './resource/palworld-patch.png';
import SideContentThumbnail from './resource/notice.png';
import './App.css';

function HeaderButton({ title }) {
  const [isHovering, setIsHovering] = useState(false);
  const toggleHover = () => {
    setIsHovering(!isHovering);
  };

  return (
    <div className="Header-button" 
        onMouseEnter={() => setIsHovering(true)} 
        onMouseLeave={() => setIsHovering(false)}>
      <a href="#" className="header-button-container">
        <span className="header-button-title">{title}</span>
        {/* 마우스 호버 상태에 따라 '+' 또는 '-' 표시 */}
        <span className="expand-arrow">{isHovering ? '-' : '+'}</span>
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="App-Background"></div>
      <nav className="header">
        <div className="header-align-left">
          <img src={PalLogo} className="c-Pal-Logo" alt="Pal-Logo"/>
          <div className="Header-button-1">
            <a href="#" className="header-button-container">
              <span className ="header-button-title">젠 타이머</span>
            </a>
          </div>
          <div className="Header-button-2">
            <a href="#" className="header-button-container">
              <HeaderButton title="교배 레시피" />
            </a>
          </div>
          <div className="Header-button-3">
            <a href="#" className="header-button-container">
              <HeaderButton title="가이드" />
            </a>
          </div>
          <div className="Header-button-4">
            <a href="#" className="header-button-container">
              <HeaderButton title="패치 노트" />
            </a>
          </div>
        </div>
        
        <div className="header-align-right">
          <a className = "Icon-Image" href="https://namu.wiki/w/Palworld">
            <img src={NamuIcon} className="c-Icon" alt="Namu-Icon"/>
          </a>
          <a className = "Icon-Image" href="https://www.reddit.com/r/Palworld">
            <img src={RedditIcon} className="c-Icon" alt="Reddit-Icon"/>
          </a>
          <a className = "Icon-Image" href="https://gall.dcinside.com/mgallery/board/lists/?id=palworld">
            <img src={DcIcon} className="c-Icon" alt="DcInside-Icon"/>
          </a>
        </div>
      </nav>

      <div className="Top-Content-Container">
        <div className="Title-Content-Container">
          <p>Welcome to PALWORLD.</p>
          <p id="Sub-Title">
            Fight, farm, build and work alongside mysterious creatures called "Pals"
            in this completely new multiplayer, open world survival and crafting game!
          </p>
        </div>
      </div>

      <div className="Body-Content-Container">
        <div className="Big-Content">
          <img src={BigContentThumbnail} className="Big-Content-Thumbnail" alt="Big-Content-Thumbnail"/>
          <div className="Big-Content-Title">
            <p>Palworld - 2024/02/07 Update Patch v0.1.4.1</p>
          </div>
        </div>
        <div className="Side-Content-Container">

          <div className="Side-Content-Top">
            <img src={SideContentThumbnail} className="Side-Content-Thumbnail" alt="Side-Content-Thumbnail"/>
            <div className="Side-Content-Title">
              <p id="top_">EARLY ACCESS</p>
              <p>Now Available on STEAM</p>
            </div>
          </div>

          <div className="Side-Content-Bottom">
            This is Side-Content-Bottom.
          </div>

        </div>
      </div>
      <footer>
        <p>
          <span>Floyre / cariano0212@gmail.com</span><br/>
          <span> © 2024 POCKET PAIR, Inc. All rights reserved.</span><br/>
        </p>
      </footer>
    </div>
  );
}

export default App;
