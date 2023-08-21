import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


export default function DisplayDevices() {
    return (
        <div className='BigBox'>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Component 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    iuqezbrfvhuipqbedipfvhubqsui^db    
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}