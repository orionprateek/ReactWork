import React from 'react'
import ReactDOM from 'react-dom'

var name = ['Prateek', 'Barry', 'Wally'];
var country = ['India', 'Australia', 'England'];
var tZone = ['Asia/Kolkata', 'Australia/Perth', 'Europe/London'];


var User = React.createClass({

	getInitialState: function(){
		return{hover: false, date: new Date().toLocaleDateString('en-US', {timeZone: this.props.tZone[]}), time: new Date().toLocaleTimeString('en-US', {timeZone: this.props.tZone[]})}
	},	

	updateTime: function(){
		if(this.state.hover){
			this.setState({date: new Date().toLocaleDateString('en-US', {timeZone: this.props.tZone[]})});
			this.setState({time: new Date().toLocaleTimeString('en-US', {timeZone: this.props.tZone[]})});
		}		
	},		

	handleHoverIn: function(){	
		this.setState({date: new Date().toLocaleDateString('en-US', {timeZone: this.props.tZone[]})});
		this.setState({time: new Date().toLocaleTimeString('en-US', {timeZone: this.props.tZone[]})});
		setInterval(this.updateTime,1000)
		this.setState({hover: true});			
	},

	handleHoverOut: function(){
		this.setState({hover: false});
	},

	render: function(){	
		var details = <div>
	       			Country: {this.props.country[]}
			       	<br />
			       	Local Time: {this.state.time}
			       	<br />
			       	Time Zone: {this.props.tZone[]}
			       	<br />
		       		Local Date: {this.state.date}
	       			<br />
	       			<br />
	       		</div>
	    var output = name.map(function(){
	    	return(y);
	    });

	    return(
	       	<div>
	       		<br />
	       		<div onMouseOver={this.handleHoverIn} onMouseOut={this.handleHoverOut} >

	       			output

	       		</div>
	       		<div>
       			 	<br />
		       		{this.state.hover ? details : null}   		
		       	</div>
	       	</div>	      
	    );
    }
});


ReactDOM.render(
	<User name={name} country={country} tZone={tZone}/>,
	document.getElementById('content')
);



