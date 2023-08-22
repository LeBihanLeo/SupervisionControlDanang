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
            <label htmlFor="Type" className="form-label">Type</label>
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

            <label htmlFor="location" className="form-label">Location</label>
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

            <label htmlFor="id" className="form-label">Id</label>
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

            <label htmlFor="bearer_token" className="form-label">Bearer token</label>
            <br/>
            <input 
              type="text"
              className="form-control" 
              placeholder ="Enter Bearer token"
              value={bearer_token}
              onChange={(e)=>setBearerToken(e.target.value)}
              required
            />
            <button onClick={loadChannel} id='newChannel'>load channel</button>
          </div>
          <div className='Box'>
            <label htmlFor="channels" className="form-label">Channels    </label>
            <button onClick={addChannel} id='newChannel'>+</button>
            <div id='channels'>

            </div>
          </div>
        </div>
        <br/>
        <button onClick={handleSubmit}>Create Device</button>   

    </div>
  )}

export default Form;