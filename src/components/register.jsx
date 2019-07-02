import React, { Component } from "react";

import Input from "./common/input";
class Register extends Component {
  state = {
    account: {
      username: "",
      password: "",
      name: ""
    },
    errors: {}
  };
  validate = () => {
    const { account } = this.state;
    const errors = {};
    if (account.username.trim() === "")
      errors.username = "Username is required ";
    if (account.password.trim() === "")
      errors.password = "Password is required";
    if (account.name.trim() === "")
      errors.name = "Name is required for registration";
    return Object.keys(errors).length === 0 ? {} : errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("Calling the backend service");
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    //whenever you want to acces a property of an object
    //dynamically you should think of using  bracket notation.
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            autoFocus
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <Input
            name="name"
            label="Name"
            autoFocus
            value={account.name}
            onChange={this.handleChange}
            error={errors.name}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
export default Register;
