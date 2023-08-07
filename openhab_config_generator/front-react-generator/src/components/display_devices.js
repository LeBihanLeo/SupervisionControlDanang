import { useState, useEffect } from 'react';

const Displayer = (props) => {
    const [posts, setPosts] = useState([]);

    function deleteDevice(){
        console.log("test")
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
                        <button onClick="deleteDevice()">remove device</button>
                    </ul>
                    ))}
                </div>
                )}
            </div>
      </div>

    )}

export default Displayer;