import { useState, useEffect } from 'react';
import APIService from './API_post'
import { Button, Tab } from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SyncIcon from '@mui/icons-material/Sync';

import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

var channelsHTML = []
var channels = []
var nb_channel = 0

const Form = (props) => {
    const [type, setType] = useState('')
    const [location, setLocation] = useState('')
    const [id, setId] = useState('')
    const [bearer_token, setBearerToken] = useState('')

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleCloseAgree = () => {
      setOpen(false);
      restartOpenHab();
    };

    var init = false;

    useEffect(() => {
      if(init === false){
        resetChannels();
        addChannel();
        init = true;
      }
    }, []);

    const createDevice = () =>{
      APIService.CreateDevice({type, location, id, bearer_token, channels})
      .then((response) => console.log(response))
      .catch(error => console.log('error',error))
    }

    const handleSubmit=(event)=>{ 
      event.preventDefault()

      for(let x = 0;x<nb_channel;x++){
        channels[x][0] = channelsHTML[x][0].value
        channels[x][1] = channelsHTML[x][1].value
      }

      createDevice()

      setType('')
      setLocation('')
      setId('')
      setBearerToken('')

      resetChannels()
      addChannel();
    }

    function resetChannels(){
      const container = document.getElementById('channels')
      container.innerHTML = ''
      channelsHTML = []
      channels = []
      nb_channel = 0
    }

    function myInput(){
      const e = document.createElement('input')
      e.type = "text"
      e.required = true
      return e
    }

    const addChannel=(event)=>{
      nb_channel ++

      const container = document.getElementById('channels')
      const div = document.createElement("div")
      
      const channel_name = myInput()
      channel_name.placeholder = "Enter name"
      channel_name.pattern = "^[a-zA-Z0-9\s]+$";
      div.appendChild(channel_name)

      div.appendChild(document.createTextNode("    "))

      const channel_json_path = myInput()
      channel_json_path.placeholder = "Enter json path"
      div.appendChild(channel_json_path)


      const channel = [channel_name,channel_json_path]

      const del = document.createElement('img');
      del.src ='https://cdn-icons-png.flaticon.com/512/535/535246.png';

      div.appendChild(del)

      del.addEventListener("click", () => {removeChannel(div, channel)});
      
      div.appendChild(document.createElement("HR"))

      channelsHTML.push(channel)
      channels.push(['',''])

      container.appendChild(div)
      return [channel_name, channel_json_path]
    }

    function removeChannel(cont, channel){
      channels.pop()
      channelsHTML = channelsHTML.filter(function (c) {
        return c != channel;
      });
      cont.innerHTML = ''
      nb_channel--
      
      if(nb_channel===0) addChannel();
    }

    const loadChannel=(event)=>{
      if(bearer_token!==""){
        APIService.GetChannels({bearer_token})
        .then((response) => {
          if(response.length > 0) resetChannels();
          response.forEach(r => {
              let c = addChannel();
              c[0].value = r["key"];
              c[1].value = r["json_path"];
          });
          
        })
        .catch(error => console.log('error',error))
      }else{
        alert("The bearer token should not be null")
      }
      
    }

    const restartOpenHab = (event) => {
      APIService.CreateDevice({})
      .then((response) => console.log(response))
      .catch(error => console.log('error',error))
    }

  return (
    <div className='card' id='Displayer'>
        <p className='title'>Create a new device</p>
            <form className='create-device' onSubmit={handleSubmit}>
                <div className='device-info'>
                    <div className='basic-info'>
                        <h2>Informations</h2>
                        <label htmlFor="type">Type</label>
                        <input 
                            id="type"
                            type="text"
                            placeholder ="Enter type"
                            pattern='[a-zA-Z0-9]+'
                            value={type}
                            onChange={(e)=>setType(e.target.value)}
                            required
                            />

                        <label htmlFor="location">Location</label>
                        <input 
                            id="location"
                            type="text"
                            placeholder ="Enter type"
                            pattern='[a-zA-Z0-9]+'
                            value={location}
                            onChange={(e)=>setLocation(e.target.value)}
                            required
                            />

                        <label htmlFor="id">Id</label>
                        <input 
                            id="id"
                            type="text"
                            placeholder ="Enter type"
                            pattern='[a-zA-Z0-9]+'
                            value={id}
                            onChange={(e)=>setId(e.target.value)}
                            required
                            />

                        <label htmlFor="bearer_token">Bearer token</label>
                        <input 
                            id="bearer_token"
                            type="text"
                            placeholder ="Enter bearer token"
                            pattern="^(eyJ[a-zA-Z0-9_\-]*\.[a-zA-Z0-9_\-]*\.[a-zA-Z0-9_\-]*)$"
                            value={bearer_token}
                            onChange={(e)=>setBearerToken(e.target.value)}
                            required
                            />
                        <Button variant="outlined" startIcon={<SyncIcon />} onClick={loadChannel}>
                                Fetch channels
                        </Button>
                    </div>
                    <div className='channels-info'>
                        <div className='div-add-channel'>
                            <h2 className="form-label">Channels</h2>
                            <Button variant="outlined" startIcon={<PlaylistAddIcon />} onClick={addChannel}>
                                Add channel
                            </Button>
                        </div>
                        <div id='channels'>            
                        </div>
                    </div>
                </div>
                <div className='center-button'>
                    <Button variant="contained" type='submit'>Create device</Button>
                    <Tab/>
                    <Button variant="contained" onClick={handleClickOpen}>Restart OpenHab</Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Restarting openHAB ?"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Restarting openHAB can take a several minutes.
                          Are you sure to continue?
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={handleCloseAgree} autoFocus>
                          Agree
                        </Button>
                      </DialogActions>
                    </Dialog>
                </div>
            </form>
        <br/>
           

    </div>
  )}

export default Form;