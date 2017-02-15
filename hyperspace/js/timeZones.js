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



	    var cardStyle = {
	        height: 140,
	        width: 210,
	        margin: 30,
	        padding: 0,
	        float: 'left',
	        backgroundColor: "#FFF",
	        filter: "drop-shadow(0px 0px 5px #666)"
	      };

	      var headerStyle = {
	      	height: 50,
	        width: 210,
	        padding: 0,
	        color: '#c2dfff',
	        textAlign: 'center',
	        backgroundColor: "#2e313c"
	      }

	      var headerContent = {
	      	fontSize: 25,
	      	fontWeight: 'bold',
	      	paddingTop: 10
	      }

	      var bottomStyle = {
	      	height: 100,
	        width: 210,
	        padding: 0,
	        color: '#2e313c',
	        textAlign: 'center',
	        backgroundColor: "#c2dfff"
	      }


	    return(

	    	<div style={cardStyle}>
	       		<div style={headerStyle}>
	       			<div style={headerContent}>
	       				<div onMouseOver={this.handleHoverIn} onMouseOut={this.handleHoverOut} >  {this.props.name}</div>
	       			</div>
	       		</div>
	       		<div style={bottomStyle}>
	       			 <div>
	       			 	<br />
			       		{this.state.hover ? details : null}   		
			       	</div>
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



