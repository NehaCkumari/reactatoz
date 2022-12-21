import React, { Component, Fragment } from 'react'
import { Navbar } from 'react-bootstrap'
import CourceDetails from '../components/CourceDetails/CourceDetails'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'

 class CourseDetailsPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
                <Fragment>
                     <Navbar title="Course Details " />  
                     <PageTop pagetitle="Course Details" /> 
                     <CourceDetails />
                     <Footer />
                </Fragment>
          )
     }
}

export default CourseDetailsPage