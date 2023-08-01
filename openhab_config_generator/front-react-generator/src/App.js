import logo from './logo.svg';
import './App.css';

import Form from './components/form_new_devices';

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
    <div className='Container'>
    <div className="App">
      <div className="Box">
        <p>
          List of devices
        </p>
        <div>
          {posts.length > 0 && (
            <ul>
              {posts.map(post => (
              <li className="device">{post.device_type}
                {post.data.map(d => (
                <li className="data"> - {d.data_name}: {d.data_type}</li>
                ))}
              </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className='Box'>
        <Form/>
      </div>
    </div>
    </div>
  );
}

export default App;
