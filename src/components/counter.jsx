import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getCounterClassName()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
        <br />
      </React.Fragment>
    );
  }

  getCounterClassName() {
    const { value } = this.props.counter;
    const className = "badge m-2 badge-";
    return value === 0 ? className + "warning " : className + "primary ";
  }

  formatCount() {
    console.log("format count :", this.props.counter.value);
    const { value } = this.props.counter;
    return value === 0 ? "ZERO" : value;
  }
}

export default Counter;
