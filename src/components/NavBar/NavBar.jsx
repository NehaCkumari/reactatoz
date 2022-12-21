import React, { Component, Fragment } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import blackLogo from "../../assets/images/logo_black.png";
import whiteLogo from "../../assets/images/logo_white.png";
import "../../assets/css/custom.css"
import "../../assets/css/bootstrap.min.css"

class NavBar extends Component {
    constructor(){
        super();
        this.state={
             navBarTitle:"navTitle",
             navBarLogo: [whiteLogo], // object
             navVariant:"dark",
             navBarBack:"navBackground",
             navBarItem:"navItem",
        }
   }

   onScroll=()=>{
        if(window.scrollY>100){
             this.setState({navBarTitle:'navTitleScroll',navBarLogo:[blackLogo],navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll',navVariant:'light'})

        }else if(window.scrollY<100){

             this.setState({navBarTitle:'navTitle',navBarLogo:[whiteLogo],navBarBack:'navBackground',navBarItem:'navItem',navVariant:'dark'})
        }
   }


    componentDidMount(){
        window.addEventListener('scroll',this.onScroll)

    }

  render() {
    return (
        <Fragment>
        <Navbar className={this.state.navBarBack} collapseOnSelect fixed="top" expand="lg" variant={this.state.navVariant}>
          <Navbar.Brand className={this.state.navBarTitle} href="#home"><img src={this.state.navBarLogo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <Nav>
              <Nav.Link className={this.state.navBarItem} href="#deets">About</Nav.Link>
              <Nav.Link className={this.state.navBarItem} href="#deets">Contact Us</Nav.Link>
              <Nav.Link className={this.state.navBarItem} href="#deets">Services</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      </Fragment>
    )
  }
}

export default NavBar