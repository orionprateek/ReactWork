import React from 'react'
import ReactDOM from 'react-dom'



var card = React.createClass({

  	render: function() {
  		var cardStyle = {
	        height: 375,
	        width: 250,
	        margin: 30,
	        padding: 0,
	        backgroundColor: "#FFF",
	        filter: "drop-shadow(0px 0px 5px #666)"
	      };

	      var headerStyle = {
	      	height: 50,
	        width: 250,
	        padding: 0,
	        textAlign: 'center',
	        backgroundColor: "#900C3F"
	      }

	      var headerContent = {
	      	fontSize: 25,
	      	fontWeight: 'bold',
	      	paddingTop: 10
	      }

	      var bottomStyle = {
	      	height: 325,
	        width: 250,
	        padding: 0,
	        textAlign: 'center',
	        backgroundColor: "#581845"
	      }

	      

	    return(
	       	<div style={cardStyle}>
	       		<div style={headerStyle}>
	       			<div style={headerContent}>
	       				Time
	       			</div>
	       		</div>
	       		<div style={bottomStyle}>
	       			<div>

	       			</div>
	       		</div>
	       	</div>
	    );
    }
});



ReactDOM.render(
	React.createElement(card),
	document.getElementById('content')
);

module.exports = card;