import React, { Component } from "react";
import "./App.css";
import Products from "./components/products";
import NavBar from "./components/navBar";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 4 },
      { id: 4, value: 6 }
    ]
  };

  handleDelete = counterId => {
    //filter counters
    const filteredCounters = this.state.counters.filter(
      c => c.id !== counterId
    );
    this.setState({ counters: filteredCounters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const resetCountersList = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: resetCountersList });
  };

  getTotalCount() {
    return this.state.counters.reduce((a, c) => a + c.value, 0);
  }

  render() {
    return (
      <div>
        <NavBar totalCount={this.getTotalCount()} />
        <main className="container">
          <Products />
        </main>
      </div>
    );
  }
}

export default App;
