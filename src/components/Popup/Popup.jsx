import React from 'react';
import './Popup.scss';


const Popup = (props) => {

  return (

    <div ref={props.nameRef}  id="popup1" className="overlay">

        <div className="popup">
        
            <div className="wrapper-up">

                <a className="close" href="https://ganaenergia.com/tarifas-gas">&times;</a>

            </div>

            <div className="wrapper-down">
                
                <button className="bt-tarifas">Ver tarifas</button>

            </div>

        </div>
    </div>
  );
}

export default Popup;
