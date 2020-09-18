import React from 'react';
import './App.scss';

import Popup from './components/Popup/Popup';

function App() {

  const popup = document.querySelector('#popup');

  console.log(popup);

  const getPopup = () => {

    console.log('Estas fuera de pantalla');
    
  }

  return (
    <div className="App" onMouseLeave={getPopup}>

        <h1 id="titulo">Popup</h1>
        <div id="wrapper" className="Wrapper">
          <p><a className="button" onClick={getPopup} href="#popup1">Click Me</a></p>
        </div>

        <Popup />

    </div>
  );
}

export default App;
