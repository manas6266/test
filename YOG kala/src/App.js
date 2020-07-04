import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Snapshot from './components/Snapshot/Snapshot';
import 'tachyons';
const App=props=> {
    return (
    	<BrowserRouter>
      <div className="App">
       <Snapshot/>
      </div>
      </BrowserRouter>
    );
  }

export default App;
