import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

 class Analysis extends Component {
    constructor(){
        super();
        this.state={
             data:[
                  {Techonology:'PHP',Projects:100},
                  {Techonology:'MySqli',Projects:90},
                  {Techonology:'Laravel',Projects:95},
                  {Techonology:'React',Projects:85},
                  {Techonology:'Opencart',Projects:80},
                  {Techonology:'Vue Js',Projects:70},
                  {Techonology:'Django',Projects:60},
                  {Techonology:'JavaScript',Projects:100}                   
             ]
        }
   }
  render() {
    return (
        <Fragment>
            <Container className='text-center'>
            <h1 className='serviceMaintitle text-center'>Technology Used</h1>
            <div className='bottom'></div>
                <Row>
                    <Col style={{width:'50%', height:'300px'}} lg={6} md={12} sm={12}>
                        <ResponsiveContainer>   
                            <BarChart width={100} height={300} data={this.state.data}>

                            <XAxis dataKey="Techonology" /> 
                            <Tooltip />
                            <Bar dataKey="Projects">

                            </Bar>


                            </BarChart>
                        </ResponsiveContainer>

                    </Col>
                    <Col lg={6} md={12} sm={12} >
                        <p className="text-justify">Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.<br></br><br></br>

                            I am working online for the last 7 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. easy learning exists to help you succeed in life.<br></br><br></br></p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default Analysis
