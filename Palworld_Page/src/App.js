import React, { useState } from 'react';
import logo from './resource/gear.png';
import PalIcon from './resource/pal-icon.png';
import PalLogo from './resource/pal-logo.png';
import NamuIcon from './resource/namu.png';
import RedditIcon from './resource/reddit-icon.png';
import DcIcon from './resource/dcinside-logo.png';
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
      <header className="App-header">
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

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          hello!<br />
          hello!<br />
          hello!<br />
          hello!<br />
          hello!<br />
          hello!<br />
          hello!<br />
          hello!<br />
          hello!<br />
          hello!<br />
          hello!<br />
          hello!<br />
          hello!<br />
          hello!<br />
          hello!<br />
          hello!<br />
          hello!<br />
          hello!<br />
        </p>
      </header>
    </div>
  );
}

export default App;
