import React from 'react'
import { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DesignIcon from "../../assets/images/design.png";
import EcommerceIcon from "../../assets/images/ecommerce.png";
import WebIcon from "../../assets/images/web.png";



class services extends Component {
  render() {
    return (
<Fragment>
    <Container>
        <h1 className='serviceMaintitle text-center'>My Services</h1>
            <div className='bottom'></div>
        <Row>
            <Col lg={4} md={6} sm={12} >
                <div className='serviceCard text-center'>
                    <img className='designIcon' src={DesignIcon} />
                    <h2 className='serviceName'>Design</h2>
                    <p className='serviceDescription'>xyz</p>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12} >
                <div className='serviceCard text-center'>
                    <img className='ecommerceIcon' src={EcommerceIcon} />
                    <h2 className='serviceName'>Ecommerce Website</h2>
                    <p className='serviceDescription'>xyz</p>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12} >
                <div className='serviceCard text-center'>
                    <img className='webIcon' src={WebIcon} />
                    <h2 className='serviceName'>Web Development</h2>
                    <p className='serviceDescription'>xyz</p>
                </div>
            </Col>
        </Row>
    </Container>
</Fragment>

    )
  }
}

export default services
