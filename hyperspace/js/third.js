import React from 'react'
import ReactDOM from 'react-dom'

function HospitalQueue(props){
	const queueContent = props.queueContent;
	return(
		<div>
			<h2> Hello! </h2>
			{queueContent.length > 0 &&
				<h3>
					There are {queueContent.length} people waiting in queue.
				</h3>
			}
		</div>
	);
}

const messages = ['Prateek', 'Bart', 'Barry', 'Wally'];

ReactDOM.render(
	<HospitalQueue queueContent={messages} />,
	document.getElementById('content')
);