import '../App.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const AccordionDevice = ({post, deleteDevice}) => {
    return (
        <Accordion id={post.device_type + "_" + post.device_location + "_" + post.device_id} > 
            <AccordionSummary   
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>{post.device_type + " " + post.device_location + " " + post.device_id}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography component={'span'}>
                <ul className='device'>
                    {post.data.map((d, index) => (
                        <div key={index}>
                            <li>- {d.data_name}</li>
                        </div>
                    ))}
                </ul>
                <Button variant="contained" startIcon={<DeleteIcon />} color="error" onClick={() => {
                    deleteDevice(post.device_type, post.device_location, post.device_id);
                }}>
                    Delete device
                </Button>
            </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionDevice;