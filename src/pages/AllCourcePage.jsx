import React, { Component, Fragment } from 'react'
import AllCourses from '../components/AllCources/AllCources'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import PageTop from '../components/PageTop/PageTop'


class AllCorusePage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
              <Fragment>
                   <NavBar title="All Courses" />
                   <PageTop pagetitle="All Courses" />
                   <AllCourses />
                   <Footer />
              </Fragment>
          )
     }
}

export default AllCorusePage