import React from 'react'
import { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DesignIcon from "../../assets/images/design.png";
import EcommerceIcon from "../../assets/images/ecommerce.png";
import WebIcon from "../../assets/images/web.png";
import "../../assets/css/custom.css"

class services extends Component {
  render() {
    return (
<Fragment>
    <Container>
        <Row>
            <Col lg={4} md={6} sm={12} >
                <div>
                    <img className='designIcon' src={DesignIcon} />
                </div>
            </Col>
            <Col lg={4} md={6} sm={12} >
                <div>
                    <img className='ecommerceIcon' src={EcommerceIcon} />
                </div>
            </Col>
            <Col lg={4} md={6} sm={12} >
                <div>
                    <img className='webIcon' src={WebIcon} />
                </div>
            </Col>
        </Row>
    </Container>
</Fragment>

    )
  }
}

export default services
