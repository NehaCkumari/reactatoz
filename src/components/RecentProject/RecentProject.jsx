import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class RecentProject extends Component {
  render() {
    return (
        <Fragment>
            <Container className='text-center'>
            <h1 className='serviceMaintitle text-center'>Recent Project</h1>
            <div className='bottom'></div>
                <Row>
                    <Col lg={4} md={6} sm={12} >
                        <Card className='projectCard'>
                        <Card.Img variant="top" src="https://img.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg?w=1060&t=st=1671542366~exp=1671542966~hmac=b7065f79ad78a10bf24a2cb2742fc01bb690055e6713244f194a24ff56b0dbc4" />
                        <Card.Body>
                            <Card.Title className='serviceName'>Card Title</Card.Title>
                            <Card.Text className='serviceDescription'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary"><Link className="link-style" to="/projectdetails"> View More </Link> </Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                    <Card className='projectCard'>
                        <Card.Img variant="top" src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=1060&t=st=1671542416~exp=1671543016~hmac=23845874314db7e8fe60a696405174ee6514c14bb9749c4787fc75bc1e7c7d4c" />
                        <Card.Body>
                            <Card.Title className='serviceName'>Card Title</Card.Title>
                            <Card.Text className='serviceDescription'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary"><Link className="link-style" to="/projectdetails"> View More </Link> </Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                    <Card className='projectCard'>
                        <Card.Img variant="top" src="https://img.freepik.com/free-vector/online-courses-tutorials_52683-37861.jpg?w=1060&t=st=1671542456~exp=1671543056~hmac=7251906d8b9a5c1efe88f6492ab73a14be765bf6b8fbb41e2559657cc1812fef" />
                        <Card.Body>
                            <Card.Title className='serviceName'>Card Title</Card.Title>
                            <Card.Text className='serviceDescription'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary"><Link className="link-style" to="/projectdetails"> View More </Link> </Button>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default RecentProject
