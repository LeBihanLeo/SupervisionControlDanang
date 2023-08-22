import './App.css';
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Displayer from './components/display_devices';
import Form from './components/form_new_devices';
import MenuBarComponent from './components/MenuBarComponent';



function App() {

  function NoMatch() {
    return (
        <div style={{ padding: 20 }}>
          <h2>404: Page Not Found</h2>
          <p>Nothing here.</p>
        </div>
    );
  }

  return (
    <Router>
        <div className="Main">
            <MenuBarComponent />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="/overview" element={<Displayer />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </div>
        </div>
    </Router>
  );
}

export default App;
