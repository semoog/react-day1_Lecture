import React from 'react';
import ReactDOM from 'react-dom'; // One time setup in main react file.

const App = React.createClass({
	render() {
		return (
			<div>
				Hello World.
        {6 + 6}
			</div>
		)
	}
});

ReactDOM.render(<App/>, document.getElementById('app')); // Element to render the component onto.
