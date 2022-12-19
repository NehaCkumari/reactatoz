import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Row, Button, Container } from "react-bootstrap"
import "../../assets/css/custom.css"
import "../../assets/css/bootstrap.min.css"

class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid="true" className="topFixedBanner p-0" >
        <div className="topBannerOverlay">
            <Container className='topContent text-center'>
                <Row>
                    <Col>
                        <h1>EASY LEARNING</h1>
                        <h2>Learn Professionally</h2>
                        <Button variant='primary'>Learn More</Button>
                    </Col>
                </Row>
            </Container>
        </div>
        </Container>

      </Fragment>
    )
  }
}

export default TopBanner
