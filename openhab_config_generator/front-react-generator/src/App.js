import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

   useEffect(() => {
      fetch('http://127.0.0.1:5000/')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

  return (
    <div className="App">
      Hello
      here is our devices

      <div className="Box">
        <div>
          {posts.length > 0 && (
            <ul>
              {posts.map(post => (
              <li className="device">{post.device_location}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
