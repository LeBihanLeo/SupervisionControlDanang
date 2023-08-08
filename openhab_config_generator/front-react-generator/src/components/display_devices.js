import { useState, useEffect } from 'react';
import APIService from './API_post'


const Displayer = (props) => {
    const [posts, setPosts] = useState([]);

    const deleteDevice = (type, loc, id) => {
        console.log(type + " " + loc + " " + id)
        
        APIService.DeleteDevice({type, loc, id})
        .then((response) => console.log(response))
        .catch(error => console.log('error',error))
    }

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
        <div>
            <p>
                List of devices
            </p>
            <div>
                {posts.length > 0 && (
                <div>
                    {posts.map(post => (
                    <ul className="device">{post.device_type}
                        {post.data.map((d,i) => (
                            <div>
                                <li className="data" key={i}> - {d.data_name}: {d.data_type}</li>
                            </div>
                        ))}
                        <button onClick={() => {
                            deleteDevice(post.device_type, post.device_location, post.device_id);
                        }}>
                            remove device
                        </button>
                    </ul>
                    ))}
                </div>
                )}
            </div>
      </div>

    )}

export default Displayer;