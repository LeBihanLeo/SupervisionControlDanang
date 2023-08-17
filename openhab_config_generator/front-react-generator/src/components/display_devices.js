import { useState, useEffect } from 'react';
import APIService from './API_post'


const Displayer = (props) => {
    const [posts, setPosts] = useState([]);

    const deleteDevice = (type, loc, id) => {
        APIService.DeleteDevice({type, loc, id})
        .then((response) => console.log(response))
        .catch(error => console.log('error',error))

        document.getElementById(type + "_" + loc + "_" + id).outerHTML = "";
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
            div>div 
            <div> 
                {posts.length > 0 && (
                <div>
                    {posts.map((post) => (
                    <ul className="device"  id={post.device_type + "_" + post.device_location + "_" + post.device_id}>{post.device_type}
                        {post.data.map((d) => (
                            <div>
                                <li className="data" key={d.data_name}> - {d.data_name}: {d.data_type}</li>
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