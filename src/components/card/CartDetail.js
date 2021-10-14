import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table,Button } from 'reactstrap';
import * as cartAction from '../../redux/actions/cartAction'
import alertify from 'alertifyjs';
import {Link} from 'react-router-dom'

class CartDetail extends Component {

    removeFromCart(product){
        this.props.actions.removeFromCart(product)
        alertify.error(product.productName + " sepetten sildiniz")
    }

    render() {
        return (
            <div>
                 <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
             <Button style={{backgroundColor:'green'}}> <Link to='/' style={{color:'white',textDecoration:'none'}}>Geri don</Link></Button>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.quantity}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>
                  <Button onClick={()=>{this.removeFromCart(cartItem.product)}} style={{backgroundColor:'red'}}>Sil</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions:{
            removeFromCart:bindActionCreators(cartAction.removeFromCard,dispatch)
        }
    }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CartDetail);