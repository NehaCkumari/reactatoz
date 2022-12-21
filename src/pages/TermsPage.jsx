import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import PageTop from '../components/PageTop/PageTop'
import TermsDescription from '../components/TermsDescription/TermsDescription'


 class TermsPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
             <Fragment>
                  <NavBar title="Trems And Condition " />  
                 <PageTop pagetitle="Trems And Condition" /> 
                  <TermsDescription />
                  <Footer />
             </Fragment>
          )
     }
}

export default TermsPage