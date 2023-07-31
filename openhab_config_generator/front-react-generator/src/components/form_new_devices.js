import React,{ useState } from 'react';
import APIService from './API_post'


const Form = (props) => {
    const [test, setTitle] = useState('')
    //const [body, setBody] = useState('')

    const insertArticle = () =>{
      //APIService.InsertArticle({title,body})
      APIService.InsertArticle({test})
      .then((response) => props.insertedArticle(response))
      .catch(error => console.log('error',error))
    }

    const handleSubmit=(event)=>{ 
      event.preventDefault()
      insertArticle()
      setTitle('')
      //setBody('')
    }

  return (
    <div className="shadow p-4">

        <form onSubmit = {handleSubmit} >

          <label htmlFor="title" className="form-label">Title</label>
          <input 
          type="text"
          className="form-control" 
          placeholder ="Enter title"
          value={test}
          onChange={(e)=>setTitle(e.target.value)}
          required
          />

          

          <button 
          className="btn btn-primary mt-2"
          >
          Publish article</button>
          
        </form>
              

    </div>
  )}

export default Form;