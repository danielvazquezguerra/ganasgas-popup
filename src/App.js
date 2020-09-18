import React, { useRef } from 'react';
import './App.scss';

import Popup from './components/Popup/Popup';

function App() {

<<<<<<< HEAD
  const popup = document.querySelector('#popup');

  console.log(popup);

  const getPopup = () => {

    console.log('Estas fuera de pantalla');
    
=======
  const popupRef = useRef(null);

  
  const getPopup = () => {
    
    const valor = popupRef.current;
    console.log(valor);

>>>>>>> 35b545433de9128ac84c7cd7af501e0305e19367
  }

  return (
    <div className="App" onMouseLeave={getPopup}>

<<<<<<< HEAD
        <h1 id="titulo">Popup</h1>
=======
    
>>>>>>> 35b545433de9128ac84c7cd7af501e0305e19367
        <div id="wrapper" className="Wrapper">
          <p><a className="button" href="#popup1">Click</a></p>
        </div>

        <Popup nameRef={popupRef}/>   

    </div>
  );
}

export default App;
