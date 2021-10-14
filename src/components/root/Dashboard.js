import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import CategoriesList from '../categories/CategoriesList';
import ProductsList from '../products/ProductsList';



export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row >
                    <Col xs="3">
                        <CategoriesList />
                    </Col>

                    <Col xs="9">
                        <ProductsList />
                    </Col>
                </Row>
                
            </div>
        )
    }
}
