import { useState, useEffect } from 'react';
import APIService from './API_post';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../App.css';
import AccordionDevice from './AccordionDevice';


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