import React from 'react';
import Zipcode from './Zipcode';

class Nav extends React.Component {
	render() {
		return (
			<div className="navbar">
				<h1>Inst Weather</h1>
				<Zipcode style={{'flexDirection': 'row'}}/>
			</div>
		)
	}
}

export default Nav;