import React from 'react';
import ReactDOM from 'react-dom'; // One time setup in main react file.

const App = React.createClass({
  getInitialState() {
    return ({
      name: "Seb",
      tempName: ""
    })
  },
	render() {
    console.log("Rendering...");
		return (
      <div>
        <div onClick={this.handleClick}>
          Hello {this.state.name}.
        </div>
        <input onChange={this.handleChange} />
      </div>
		)
	},
  handleClick() {
    this.setState({
      name: this.state.tempName
    })
  },
  handleChange(event) {
    this.setState({
      tempName: event.target.value
    })
  }
});

ReactDOM.render(
	<App/>, document.getElementById('app')); // Element to render the component onto.
