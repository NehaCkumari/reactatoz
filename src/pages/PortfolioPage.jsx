import React, { Component, Fragment } from 'react'
import AllProjects from '../components/AllProjects/AllProjects'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import PageTop from '../components/PageTop/PageTop'


class PortfolioPage extends Component {
     render() {
          return (
              <Fragment>
                   <NavBar title="Our Portfolio"/>
                   <PageTop pagetitle="Our Portfolio" />
                   <AllProjects />
                   <Footer />
              </Fragment>
          )
     }
}

export default PortfolioPage