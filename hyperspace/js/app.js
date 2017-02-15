import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TimePop from './PopOverTime'

var name = ['Prateek', 'Barry', 'Wally'];
var country = ['India', 'Australia', 'England'];
var tZone = ['Asia/Kolkata', 'Australia/Perth', 'Europe/London'];

const App = React.createClass({
	render: function(){
		return(
			<div>
				<MuiThemeProvider>
					<TimePop name={this.props.name} country={this.props.country} tZone={this.props.tZone}/>
				</MuiThemeProvider>
			</div>
		)
	}
});

ReactDOM.render(
	<App name="Prateek" country="India" tZone="Asia/Kolkata" />,
	document.getElementById('content')
)