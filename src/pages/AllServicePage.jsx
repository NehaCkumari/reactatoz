import React, { Component, Fragment } from 'react'
import ContactSec from '../components/ContactSec/ContactSec'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import PageTop from '../components/PageTop/PageTop'
import Services from '../components/Services/services'



class AllServicePage extends Component {
     render() {
          return (
             <Fragment>
                  <NavBar title="Our Services"/>
                  <PageTop pagetitle="Our Services" />
                  <Services />
                  <ContactSec />
                  <Footer />
             </Fragment>
          )
     }
}

export default AllServicePage