import React, { Component } from "react";
import "./App.css";
import Products from "./components/products";
import NavBar from "./components/navBar";
// import BackGroundImg from "./data/images/backgroundimg.jpg";
// import "./styles/nav.css";
import "./styles/background.css";
class App extends Component {
  state = {};

  // handleDelete = counterId => {
  //   //filter counters
  //   const filteredCounters = this.state.counters.filter(
  //     c => c.id !== counterId
  //   );
  //   this.setState({ counters: filteredCounters });
  // };

  // handleIncrement = counter => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index].value++;
  //   this.setState({ counters });
  // };

  // handleReset = () => {
  //   const resetCountersList = this.state.counters.map(c => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters: resetCountersList });
  // };

  // getTotalCount() {
  //   return this.state.counters.reduce((a, c) => a + c.value, 0);
  // }

  render() {
    return (
      <div>
        <NavBar />
        <main className="container">
          <Products />
        </main>
      </div>
    );
  }
}

export default App;
