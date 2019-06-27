import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./components/products";
import NavBar from "./components/navBar";
import Home from "./components/home";
import Login from "./components/login";
import Orders from "./components/orders";
import Register from "./components/register";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./styles/background.css";
import "./App.css";
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
        <div className="container">
          {/* <Products /> */}

          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Products} />
            <Route path="/login" component={Login} />
            <Route path="/orders" component={Orders} />
            <Route path="/register" component={Register} />
            <Route path="/" exact component={Home} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
