var axios = require('axios');

function getForecast(city) {
	return axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=81f6cbc09b189fd8d68af27bebd582b2')
		.then(function(result){
			return result.data.list
		}).catch(function(e){
			console.warn(e)
			return null
		})
}

module.exports = {
	forecast: getForecast
}
