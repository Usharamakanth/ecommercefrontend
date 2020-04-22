import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getSelectCategoriesList } from "../services/fakeCategorys";
import { getProducts } from "../services/fakeProducts";
class AddProductForm extends Form {
  state = {
    data: {
      name: "",
      price: "",
      category: ""
    },
    errors: {}
  };
  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    price: Joi.number()
      .required()
      .label("Price"),
    category: Joi.string()
      .required()
      .label("Category")
  };
  doSubmit = () => {
    console.log("Calling the backend service with values :", this.state.data);
    getProducts.createProduct(this.state.data);
    this.props.history.push("/products");
  };

  render() {
    return (
      <>
        <h3>Add Product</h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username", true)}
            {this.renderInput("password", "Password", false, "password")}
            {this.renderSelect(
              "category",
              "Category",
              getSelectCategoriesList(),
              true
            )}
            {this.renderButton("Save")}
          </form>
        </div>
      </>
    );
  }
}

export default AddProductForm;
