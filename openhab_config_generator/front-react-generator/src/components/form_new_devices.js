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

    const insertArticle = () =>{
      APIService.InsertArticle({type, location, id, bearer_token, channels})
      .then((response) => props.insertedArticle(response))
      .catch(error => console.log('error',error))
    }

    const handleSubmit=(event)=>{ 
      event.preventDefault()

      for(let x = 0;x<nb_channel;x++){
        channels[x][0] = channelsHTML[x][0].value
        channels[x][1] = channelsHTML[x][1].value
      }

      console.log(channels)
      insertArticle()

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

      const channel_name = myInput()
      channel_name.placeholder = "Enter name"
      container.appendChild(channel_name)

      const channel_json_path = myInput()
      channel_json_path.placeholder = "Enter json path"
      container.appendChild(channel_json_path)

      container.appendChild(document.createElement("BR"))

      const channel = [channel_name,channel_json_path]

      channelsHTML.push(channel)
      channels.push(['',''])
      console.log(channels.length)

    }



  return (
    <div className="shadow p-4">
      <p>Create a new device</p>
        <div>
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
          <br/>
          <label htmlFor="channels" className="form-label">Channels</label>
          <br/>
          <button onClick={addChannel}>add channel</button>
          <div id='channels'></div>

          <br/>
          <br/>
          <button onClick={handleSubmit}>Create Device</button>
          
        </div>
              

    </div>
  )}

export default Form;