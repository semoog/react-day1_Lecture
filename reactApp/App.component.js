import React from 'react';
import ReactDOM from 'react-dom'; // One time setup in main react file.

const App = React.createClass({
  getInitialState() {
    return ({
      name: "Seb",
      tempName: "",
      list: ["1", "2", "3"]
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
        {this.state.list.map(value => { // Unique keys have to be specified just as in ng-repeat. In this case our values are unique.
          return (
            <div key={value}>{value}</div>
          )
        })}
      </div>
		) // Equivalent to ng-repeat in angular. Sort of.
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
