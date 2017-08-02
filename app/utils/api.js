import axios from 'axios';

export async function getForecast(city) {
	const result = await axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=81f6cbc09b189fd8d68af27bebd582b2&cnt=5`);
	return result.data.list
}
