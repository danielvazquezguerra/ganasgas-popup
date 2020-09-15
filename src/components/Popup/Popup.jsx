import React from 'react';
import './Popup.scss';

const Popup = () => {

    
  return (
    <div id="popup1" className="overlay">

        <div className="popup">
        
            <div className="wrapper-up">

                <a className="close" href="#">&times;</a>

            </div>

            <div className="wrapper-down">
                
                <button className="bt-tarifas">Ver tarifas</button>

            </div>

        </div>
    </div>
  );
}

export default Popup;
