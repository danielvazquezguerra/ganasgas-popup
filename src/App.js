import React from 'react';
import './App.scss';

import Popup from './components/Popup/Popup';

function App() {
  return (
    <div className="App">

        <h1>Popup</h1>
        <div id="wrapper" className="Wrapper">
          <p><a class="button" href="#popup1">Click Me</a></p>
        </div>

        <Popup />

    </div>
  );
}

export default App;
