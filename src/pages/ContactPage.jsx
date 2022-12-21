import React, { Component, Fragment } from 'react'
import ContactSec from '../components/ContactSec/ContactSec'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import PageTop from '../components/PageTop/PageTop'

  class ContactPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
              <Fragment>
                   <NavBar title="Contact Us"/>
                   <PageTop pagetitle="Contact Us" />
                   <ContactSec />
                   <Footer />
              </Fragment>
          )
     }
}

export default ContactPage