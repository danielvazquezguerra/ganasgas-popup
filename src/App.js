import React, { useRef } from 'react';
import './App.scss';

import Popup from './components/Popup/Popup';

function App() {

  const popupRef = useRef(null);

  
  const getPopup = () => {
    
    const valor = popupRef.current;
    console.log(valor);

  }

  return (
    <div className="App" onMouseLeave={getPopup}>

    
        <div id="wrapper" className="Wrapper">
          <p><a className="button" href="#popup1">Click</a></p>
        </div>

        <Popup nameRef={popupRef}/>   

    </div>
  );
}

export default App;
