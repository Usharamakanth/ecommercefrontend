import React from "react";
import Joi from "joi-browser";
// import Input from "./common/input";
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
      .min(5)
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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", true)}
          {this.renderInput("password", "Password", false, "password")}
          {this.renderInput("name", "Name", true)}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}
export default Register;
