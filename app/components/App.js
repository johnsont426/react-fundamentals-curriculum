import React from 'react';
import Form from './Form';
import Nav from './Nav';
import { Forecast } from './Forecast';
import Detail from './Detail';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
	render(){
		return (
			<BrowserRouter>
				<div className="container">
					<Nav />
					<Switch>
						<Route exact path='/' component={Form}/>
						<Route path='/forecast' component={Forecast}/>
						<Route path='/detail/:city' component={Detail}/>
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default App;