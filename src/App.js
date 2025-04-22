import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="gradient-bg"></div>
      <div className="noise"></div>

      <div className="container">
        <div className="logo-container">
          <svg className="logo-svg" width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Infinity loop shape with gradient */}
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#14b8a6" }} />
                <stop offset="50%" style={{ stopColor: "#0ea5e9" }} />
                <stop offset="100%" style={{ stopColor: "#8b5cf6" }} />
              </linearGradient>
              <filter id="logoGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* More rounded infinity symbol with thinner stroke */}
            <path d="M25 50 C15 30, 35 30, 50 50 S85 70, 75 50 S50 30, 50 50 S15 70, 25 50 Z"
              fill="none"
              stroke="url(#logoGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#logoGlow)" />

            {/* AI dot accent */}
            <circle cx="70" cy="35" r="3.5" fill="#f43f5e" />
          </svg>
          <h1 className="logo">FutureloopAI</h1>
        </div>
        <h2 className="headline">AI built for real industries.</h2>
        <p className="subheadline">
          Tech moved fast. Most industries got left behind. We're here to change that — with AI that understands your work, your data, your reality.
        </p>
        <div className="launching-soon">
          <span className="launching-text">Launching soon</span>
        </div>
      </div>
    </>
  );
}

export default App;
