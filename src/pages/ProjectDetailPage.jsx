import React, { Component, Fragment } from 'react'
import { Navbar } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'

class ProjectDetailPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
               <Fragment>
                    <Navbar title="Project Details " />  
                    <PageTop pagetitle="Project Details" />  
                    <ProjectDetails />
                    <Footer />
               </Fragment>
          )
     }
}

export default ProjectDetailPage