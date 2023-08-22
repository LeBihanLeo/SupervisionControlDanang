
export default class APIService{

	// Insert an article
	static CreateDevice = (body) => {
		return fetch(`http://localhost:5000/add`,{
      		'method':'POST',
      		 headers : {
      		'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
	.then(response => response.json())
	.catch(error => console.log(error))
	}

	static DeleteDevice = (body) => {
		return fetch(`http://localhost:5000/remove`,{
      		'method':'POST',
      		 headers : {
      		'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
	.then(response => response.json())
	.catch(error => console.log(error))
	}

	static GetChannels = (body) => {
		return fetch(`http://localhost:5000/getChannels`,{
      		'method':'POST',
      		 headers : {
      		'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
	.then(response => response.json())
	.catch(error => console.log(error))
	}

}