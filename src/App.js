import React, { useState } from 'react';
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

  const actNumber = {
    n: 'Intro',
    n: 'Intro2',
    n: 'Intro3',
    n: 'Intro4',
    n: 'Intro5',
    n: 'Act1',
    n: 'Act2',
    n: 'Act3',
    n: 'Act4',
  }

  const [currentAct, setCurrentAct] = useState('Intro');

  

  return (
    <div className="all">
      <div className="content">
        <Intro display={currentAct === 'Intro'?'block':'none'}/>
        <Intro2 display={currentAct === 'Intro2'?'flex':'none'} />
        <Intro3 display={currentAct === 'Intro3'?'flex':'none'} />
        <Intro4 display={currentAct === 'Intro4'?'flex':'none'} />
        <Intro5 display={currentAct === 'Intro5'?'flex':'none'} />
        <Act1 display={currentAct === 'Act1'?'flex':'none'} />
        <Act2 display={currentAct === 'Act2'?'flex':'none'} />
        <Act3 display={currentAct === 'Act3'?'flex':'none'} />
        <Act4 display={currentAct === 'Act4'?'flex':'none'} />
      </div>
      <div className="nav--content">
        ...
      </div>
    </div>
  );
}

export default App;
