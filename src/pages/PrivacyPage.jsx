import React, { Component, Fragment } from 'react'
import { Navbar } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import PrivacyDescription from '../components/PrivacyDescription/PrivacyDescription'


 class PrivacyPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
               <Fragment>
                    <Navbar title="Privacy And Policy" />  
                     <PageTop pagetitle="Privacy And Policy" />  
                    <PrivacyDescription />
                    <Footer />

               </Fragment>
          )
     }
}

export default PrivacyPage