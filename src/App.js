import React from 'react';
import './App.css';
import Portfolio from './Portfolio.js';
import Resume from './Resume.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          In the coming days learn about JD Evers. A software engineer, AI enthusiast and teacher.
      </header>
      <body>
        <Resume />
        <Portfolio />
      </body>
    </div>
  );
}

export default App;
