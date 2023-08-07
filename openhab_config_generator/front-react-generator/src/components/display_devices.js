import { useState, useEffect } from 'react';

const Displayer = (props) => {
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
        <div>
            <p>
                List of devices
            </p>
            <div>
                {posts.length > 0 && (
                <ul>
                    {posts.map(post => (
                    <ul className="device">{post.device_type}
                    {post.data.map((d,i) => (
                        <li className="data" key={i}> - {d.data_name}: {d.data_type}</li>
                    ))}
                    </ul>
                    ))}
                </ul>
                )}
            </div>
            <button onClick={() => window.location.reload(false)}>Click to reload!</button>
      </div>

    )}

export default Displayer;