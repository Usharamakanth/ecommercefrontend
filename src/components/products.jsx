import React, { Component } from "react";
import { getProducts } from "../services/fakeProducts";
import { getCategories } from "../services/fakeCategorys";
// import Like from "./common/like";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { paginate } from "../utils/paginate";
class Products extends Component {
  state = {
    products: [],
    categories: [],
    pageSize: 3,
    currentPage: 1,
    currentCategory: {},
    selectedCategory: { name: "All Categories" }
  };

  componentDidMount() {
    const products = getProducts();
    const categories = [{ name: "All Categories" }, ...getCategories()];
    this.setState({ products, categories });
  }

  handleDeleteFromProducts = productToDelete => {
    const actualProducts = this.state.products;
    const filteredProducts = actualProducts.filter(
      product => product._id !== productToDelete._id
    );
    this.setState({ products: filteredProducts });
  };

  handleAddProductToCart = productToAdd => {
    const products = [...this.state.products];
    const index = products.indexOf(productToAdd);
    products[index].numOfItemsInCart++;
    this.setState({ products });
  };

  handleDeleteProductFromCart = productToDeleteFromCart => {
    const products = [...this.state.products];
    const index = products.indexOf(productToDeleteFromCart);
    products[index].numOfItemsInCart--;
    this.setState({ products });
  };

  getTotalNumOfItemsInCart() {
    return this.state.products.reduce((a, c) => a + c.numOfItemsInCart, 0);
  }

  showNoProductsWarning(numOfProducts) {
    if (numOfProducts === 0) {
      return " No products found";
    }
  }

  // handleLike = likedProduct => {
  //   const products = [...this.state.products];
  //   const index = products.indexOf(likedProduct);
  //   products[index].liked = !products[index].liked;
  //   this.setState({ products });
  // };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSelectCategory = category => {
    // console.log("category selected is :", category);
    this.setState({ selectedCategory: category, currentPage: 1 });
  };
  render() {
    const { length: count } = this.state.products;
    const {
      products: allProducts,
      currentPage,
      selectedCategory,
      pageSize
    } = this.state;
    //filter the products basing on category
    const filteredProductsList = selectedCategory._id
      ? allProducts.filter(p => p.category._id === selectedCategory._id)
      : allProducts;
    const products = paginate(filteredProductsList, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.categories}
            onSelectItem={this.handleSelectCategory}
            selectedItem={this.state.selectedCategory}
          />
        </div>
        <div className="col">
          <button className="btn btn-primary pull-right">
            <i className="fa fa-shopping-cart" aria-hidden="true" />
            <span className="badge badge-light m-2">
              {this.getTotalNumOfItemsInCart()}
            </span>
          </button>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>
                  Price <i className="fa fa-eur" aria-hidden="true" />
                </th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.showNoProductsWarning(count)}
              {products.map(product => (
                <tr key={product._id}>
                  <td>
                    <img
                      src={product.image}
                      width={50}
                      height={50}
                      alt={product.name}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category.name}</td>
                  <td>
                    <button
                      onClick={() => this.handleAddProductToCart(product)}
                      className="btn btn-success"
                    >
                      +
                    </button>
                    <button
                      onClick={() => this.handleDeleteProductFromCart(product)}
                      className="btn btn-warning m-2"
                      disabled={
                        product.numOfItemsInCart === 0 ? "disabled" : ""
                      }
                    >
                      -
                    </button>
                    {/* <Like
                      liked={product.liked}
                      onClick={() => this.handleLike(product)}
                    /> */}
                    <button
                      onClick={() => this.handleDeleteFromProducts(product)}
                      className="btn btn-danger m-2"
                    >
                      x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={filteredProductsList.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Products;
