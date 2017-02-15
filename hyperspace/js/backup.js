import React from 'react'
import ReactDOM from 'react-dom'

var User = React.createClass({

	
	getInitialState: function(){
		return{hover: false}
	},
	
	handleHoverIn: function(){
		this.setState({hover: true});
	},

	handleHoverOut: function(){
		this.setState({hover: false});
	},

	render: function(){

		var details = <div>
	       			Country: {this.props.country}
			       	<br />
			       	Local Time: {this.props.time}
			       	<br />
		       		Local Date: {this.props.date}
	       			<br />
	       			<br />
	       		</div>

	    return(
	       	<div>
	       		<br />
	       		<div onMouseOver={this.handleHoverIn} onMouseOut={this.handleHoverOut} >  {this.props.name}</div>
	       		<div>
       			 	<br />
		       		{this.state.hover ? details : null}   		
		       	</div>
	       	</div>	      
	    );
    }
});

ReactDOM.render(
	<div>
		<User name="Prateek" country="India" date={new Date().toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata' })} time={new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}/>
		<User name="Barry" country="Australia" date={new Date().toLocaleDateString('en-US', { timeZone: 'Australia/Perth' })} time={new Date().toLocaleTimeString('en-US', { timeZone: 'Australia/Perth' })}/>
		<User name="Wally" country="United States of America" date={new Date().toLocaleDateString('en-US', { timeZone: 'America/New_York' })} time={new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' })}/>
		<User name="Naruto" country="Japan" date={new Date().toLocaleDateString('en-US', { timeZone: 'Asia/Tokyo' })} time={new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo' })}/>
	</div>,
	document.getElementById('content')
);



