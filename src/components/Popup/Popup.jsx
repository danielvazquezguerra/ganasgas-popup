import React from 'react';
import './Popup.scss';

const Popup = () => {
  return (
    <div id="popup1" class="overlay">
        <div class="popup">
        
            <div class="wrapper-up">

                <a class="close" href="#">&times;</a>

            </div>

            <div class="wrapper-down">
                
                <button class="bt-tarifas">Ver tarifas</button>

            </div>

        </div>
    </div>
  );
}

export default Popup;
