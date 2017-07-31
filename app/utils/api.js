var axios = require('axios');

function getForecast(city) {
	return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&APPID=81f6cbc09b189fd8d68af27bebd582b2&cnt=5')
		.then(function(result){
			return {list: result.data.list}
		})
}

module.exports = {
	forecast: getForecast
}
