const dogAPI = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9ae96ccc04msh6ac42f5031ed2fcp165a43jsn4a44b9c17108',
		'X-RapidAPI-Host': 'dogbreeds.p.rapidapi.com'
	}
};

fetch('https://dogbreeds.p.rapidapi.com/api/dog-breeds/list/profiles', dogAPI)
	.then(response => response.json())
	.then(allData)
    
	.catch(err => console.error(err));

    function allData (data) {

console.log(data)
    };
