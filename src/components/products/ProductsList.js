import React, { Component } from "react";
import { Badge, Button } from "reactstrap";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productListAction from "../../redux/actions/productListAction";
import * as cartAction from "../../redux/actions/cartAction";
import alertify from 'alertifyjs'

class ProductsList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart = (product)=>{
    this.props.actions.addToCart({quantity:1,product})
    alertify.success(product.productName + " sepete eklendi");
  }

  render() {
    return (
      <div>
        <h3 color="red">
          <Badge style={{ backgroundColor: "orange", color: "black" }}>
            Products
          </Badge>
          <Badge style={{ backgroundColor: "green" }}>
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button onClick={()=>{this.addToCart(product)}}>Sepete ekle</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducers,
    products: state.productListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productListAction.getProducts, dispatch),
      addToCart:bindActionCreators(cartAction.addToCart,dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
