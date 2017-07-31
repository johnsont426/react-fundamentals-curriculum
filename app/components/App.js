var React = require('react');
var Form = require('./Form');
var Nav = require('./Nav');
var Forecast = require('./Forecast').Forecast;
var Detail = require('./Detail');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
	render(){
		return (
			<Router>
				<div className="container">
					<Nav />
					<Switch>
						<Route exact path='/' component={Form}/>
						<Route path='/forecast' component={Forecast}/>
						<Route path='/detail/:city' component={Detail}/>
					</Switch>
				</div>
			</Router>
		)
	}
}

module.exports = App;