import React from 'react';
import ReactDOM from 'react-dom'; // One time setup in main react file.

const App = React.createClass({
	render() {
		return (
			<div>
				Hello World.
			</div>
		)
	}
});

ReactDOM.render(<App />, document.getElementById('app')); // Element to render the component onto.
