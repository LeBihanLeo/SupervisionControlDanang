import React,{ useState } from 'react';
import APIService from './API_post'


const Form = (props) => {
    const [type, setType] = useState('')
    const [location, setLocation] = useState('')
    const [id, setId] = useState('')
    const [bearer_token, setBearerToken] = useState('')

    var channelsHTML = []
    var channels = []
    var nb_channel = 0

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

      console.log(channels)
      createDevice()

      setType('')
      setLocation('')
      setId('')
      setBearerToken('')

      const container = document.getElementById('channels')
      container.innerHTML = ''
      channelsHTML = []
      channels = []
      nb_channel = 0
    }

    function myInput(){
      const e = document.createElement('input')
      e.type = "text"
      e.className="form-control" 
      return e
    }

    const addChannel=(event)=>{
      nb_channel ++

      const container = document.getElementById('channels')
      container.appendChild(document.createTextNode("channel " + nb_channel + ":   "))

      container.appendChild(document.createElement("BR"))
      const channel_name = myInput()
      channel_name.placeholder = "Enter name"
      container.appendChild(channel_name)

      container.appendChild(document.createTextNode("    "))

      const channel_json_path = myInput()
      channel_json_path.placeholder = "Enter json path"
      container.appendChild(channel_json_path)

      container.appendChild(document.createElement("BR"))

      const channel = [channel_name,channel_json_path]

      channelsHTML.push(channel)
      channels.push(['',''])
      console.log(channels.length)

    }

    const loadChannel=(event)=>{
      APIService.GetChannels({bearer_token})
      .then((response) => console.log(response))
      .catch(error => console.log('error',error))
    }

  return (
    <div className='card' id='Displayer'>
        <p>CREATE A NEW DEVICE</p>
        <div className='BigBox'>
          <div className='Box'>
            <label htmlFor="Type" className="form-label">Informations</label><br/>
            Type
            <br/>
            <input 
              type="text"
              className="form-control" 
              placeholder ="Enter type"
              value={type}
              onChange={(e)=>setType(e.target.value)}
              required
            />
            <br/>

            Location
            <br/>
            <input 
              type="text"
              className="form-control" 
              placeholder ="Enter location"
              value={location}
              onChange={(e)=>setLocation(e.target.value)}
              required
            />
            <br/>

            Id
            <br/>
            <input 
              type="text"
              className="form-control" 
              placeholder ="Enter id"
              value={id}
              onChange={(e)=>setId(e.target.value)}
              required
            />
            <br/>

            Bearer token
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Refresh_icon.svg/2048px-Refresh_icon.svg.png" onClick={loadChannel}></img>
            <br/>
            <input 
              type="text"
              className="form-control" 
              placeholder ="Enter Bearer token"
              value={bearer_token}
              onChange={(e)=>setBearerToken(e.target.value)}
              required
            />
          </div>
          <div className='Box'>
            <label htmlFor="channels" className="form-label">Channels    </label>
            <img src="https://cdn-icons-png.flaticon.com/512/60/60745.png" onClick={addChannel}></img>
            <div id='channels'>            
            
            </div>
          </div>
        </div>
        <br/>
        <button onClick={handleSubmit}>Create Device</button>   

    </div>
  )}

export default Form;