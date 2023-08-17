import './App.css';
import {useState} from 'react';


import Displayer from './components/display_devices';
import Form from './components/form_new_devices';



function App() {
  const [isShownAdd, setIsShownAdd] = useState(true);
  const [isShownOver, setIsShownOver] = useState(false);

  const goToAdd = event => {
    setIsShownAdd(true);
    setIsShownOver(false);
  };

  const goToOverview = event => {
    setIsShownAdd(false);
    setIsShownOver(true);
  };


  return (
    <div className="Main">
      <div className="TopBar">
        <p class="menuTitle" onClick={goToAdd}>Add</p>
        <p class="menuTitle" onClick={goToOverview}>Overview</p>
      </div>

      <div className="App">
          {isShownOver && (
            <Displayer/>
          )} 
        {isShownAdd && (
            <Form/>
          )} 
      </div>
    </div>
    
  );
}

export default App;
