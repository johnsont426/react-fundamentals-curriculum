import React from 'react';
import Zipcode from './Zipcode';

class Form extends React.Component {
	render() {
		return (
			<div className="home-container">
				<h1 className="header">Enter a City and State</h1>
				<Zipcode />
			</div>
		)
	}
}

export default Form;