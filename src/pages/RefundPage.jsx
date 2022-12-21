import React, { Component, Fragment } from 'react'
import { Navbar } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import RefundDescription from '../components/RefundDescription/RefundDescription'


class RefundPage extends Component {
     render() {
          return (
              <Fragment>
                 <Navbar title="Refund Policy" />  
                 <PageTop pagetitle="Refund Policy" /> 
                  <RefundDescription />
                  <Footer />
              </Fragment>
          )
     }
}

export default RefundPage