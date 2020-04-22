import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getSelectCategoriesList } from "../services/fakeCategorys";
import { getProducts } from "../services/fakeProducts";

class ProductDetails extends Form {
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
  componentDidMount() {
    const product = getProducts.getProductWithId(this.props.match.params.id);
    if (!product) return this.props.history.replace("/not-found");
    const data = { ...this.state.data };
    data.name = product.name;
    data.price = product.price;
    data.category = product.category._id;
    this.setState({ data });
  }
  doSubmit = () => {
    console.log("Calling the backend service with values :", this.state.data);
    const data = { id: this.props.match.params.id, ...this.state.data };
    getProducts.updateProduct(data);
    this.props.history.push("/products");
  };

  render() {
    return (
      <>
        <h1>Details of Products</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name", true, "text", true)}
          {this.renderInput("price", "Price", false, "text", true)}
          {this.renderSelect(
            "category",
            "Category",
            getSelectCategoriesList(),
            true
          )}
          {this.renderButton("Save")}
        </form>
      </>
    );
  }
}

export default ProductDetails;
