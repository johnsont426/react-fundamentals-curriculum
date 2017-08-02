import React from 'react';
import { Day } from './Forecast';
import { convertTemp } from '../utils/helpers';

class Detail extends React.Component {
	render() {
		const city = this.props.match.params.city;
		const { weather, temp, humidity } = this.props.location.state;
		return (
			<div>
				<Day dayData={this.props.location.state}/>
				<div className='description-container'>
					<p>{city}</p>
					<p>{weather[0].description}</p>
					<p>min temp: {convertTemp(temp.min)}</p>
					<p>max temp: {convertTemp(temp.max)}</p>
					<p>humidity: {humidity}</p>
				</div>
			</div>
		)
	}
}

export default Detail;