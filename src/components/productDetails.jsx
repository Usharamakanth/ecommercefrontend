import React, { Component } from "react";

class ProductDetails extends Component {
  state = {};
  handleSave = () => {
    // Navigate to /products
    //back button will bring back to product details
    this.props.history.push("/products");
    //back button will not bring back to productDetails
    // this.props.history.replace("/products");
  };

  render() {
    return (
      <div>
        <h1>Product Details -{this.props.match.params.id} </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
