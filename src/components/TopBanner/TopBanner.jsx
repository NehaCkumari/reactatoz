import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Row, Button, Container } from "react-bootstrap"


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
                        <h5>Learn Professionally</h5>
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
