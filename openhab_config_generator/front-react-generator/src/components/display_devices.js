import { useState, useEffect } from 'react';
import APIService from './API_post';
import '../App.css';
import AccordionDevice from './AccordionDevice';

//const adress = 'http://openhabconfiggenapi:8000'
//const adress = 'http://localhost:8000'
// now using window.location.hostname
const adress = 'http://' + window.location.hostname + ':8000'

const Displayer = (props) => {
    const [posts, setPosts] = useState([]);

    const deleteDevice = (type, loc, id) => {
        APIService.DeleteDevice({type, loc, id})
        .then((response) => console.log(response))
        .catch(error => console.log('error',error))
        document.getElementById(type + "_" + loc + "_" + id).outerHTML = "";
    }

    useEffect(() => {
        fetch(adress)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className='card'>
            <h3>List of devices</h3>
            <div> 
                {posts.length > 0 && (
                <div>
                    {posts.map((post, index) => (
                        <AccordionDevice key={index} post={post} deleteDevice={deleteDevice} />
                    ))}
                </div>
                )}
            </div>
        </div>
    );
};

export default Displayer;