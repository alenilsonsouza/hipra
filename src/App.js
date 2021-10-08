import React from 'react';
import './App.css';

import Intro from './Components/intro/Intro';
import Intro2 from './Components/intro2/Intro2';
import Intro3 from './Components/Intro3/Intro3';
import Intro4 from './Components/Intro4/Intro4';
import Intro5 from './Components/Intro5/Intro5';
import Act1 from './Components/act1';
import Act2 from './Components/act2';
import Act3 from './Components/act3';
import Act4 from './Components/act4';

const App = () => {
  return (
    <div className="all">
      <div className="content">
        <Act4 />
      </div>
    </div>
  );
}

export default App;
