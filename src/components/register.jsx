import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import Form from "./common/form";
class Register extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: ""
    },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };
  doSubmit = () => {
    console.log("Calling the backend service with values :", this.state.data);
  };
  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            autoFocus
            value={data.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            value={data.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <Input
            name="name"
            label="Name"
            autoFocus
            value={data.name}
            onChange={this.handleChange}
            error={errors.name}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
export default Register;
