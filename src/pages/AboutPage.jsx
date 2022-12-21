import React, { Component, Fragment } from 'react'
import AboutDescription from '../components/AboutDescription/AboutDescription'
import AboutMe from '../components/AboutMe/AboutMe'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import PageTop from '../components/PageTop/PageTop'


 class AboutPage extends Component {
     render() {
          return (
                <Fragment>
                 <NavBar title="About Us" />  
                 <PageTop pagetitle="About Us" />  
                 <AboutMe />
                 <AboutDescription />
                 <Footer />
                </Fragment>
          )
     }
}

export default AboutPage