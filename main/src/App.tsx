import React, { useState, useEffect } from 'react';
import './App.css';
import Name from './views/ts/name'
import Tawonchat from './views/ts/tawonchat'
function App() {

  return (
    <>
        <div id="container">
          <div>
            <h1>Welcome to My Website</h1>
            <p>This is some content on my website.</p>
          
            <Name />
            <div className="test">
            <Tawonchat />
            </div>
          </div>
        </div>

    </>
  );
}

export default App;
