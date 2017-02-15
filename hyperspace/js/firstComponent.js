import React from 'react'
import ReactDOM from 'react-dom'

var CommentBox = React.createClass({
	getInitialState: function(){

		return { data: "This is the old data"}	

	},

	HandleClick: function(){

		if(this.state.data === "Data Changed!"){
			this.setState({data: "This is the old data"});
		}
		else{
			this.setState({data: "Data Changed!"});
		}

		

	},

	render : function(){
		return (
			<div style={{ fontSize: "40px"}} className = "commentBox">
				{this.state.data}

				<button onClick={this.HandleClick}> Click Me!</button>
			</div>
		);
	}
});

ReactDOM.render(
	React.createElement(CommentBox),
	document.getElementById('content')
);