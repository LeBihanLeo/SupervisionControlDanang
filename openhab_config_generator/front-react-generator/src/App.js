import './App.css';
import Displayer from './components/display_devices';

import Form from './components/form_new_devices';



function App() {
  return (
    <div className="App">
      <div className="Box" id='display'>
        <Displayer/>
      </div>
      <div className='Box' id='form'>
        <Form/>
      </div>
    </div>
  );
}

export default App;
