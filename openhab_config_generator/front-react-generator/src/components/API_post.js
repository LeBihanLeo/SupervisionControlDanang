
const adress = 'http://127.0.0.1:5000/'

export default class APIService{

	// Insert an article
	static CreateDevice = (body) => {
		return fetch(adress + `/add`,{
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
		return fetch(adress + `/remove`,{
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
		return fetch(adress + `/getChannels`,{
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