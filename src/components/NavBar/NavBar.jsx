import React, { Component, Fragment } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

class NavBar extends Component {
    constructor(){
        super();
        this.state={
             navBarTitle:"navTitle",
        }
   }

   onScroll=()=>{
        if(window.scrollY>100){
             this.setState({navBarTitle:'navTitleScroll'})

        }else if(window.scrollY<100){

             this.setState({navBarTitle:'navTitle'})
        }
   }


    componentDidMount(){
        window.addEventListener('scroll',this.onScroll)

    }

  render() {
    return (
        <Fragment>
        <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className={this.state.navBarTitle} href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <Nav>
              <Nav.Link href="#deets">About</Nav.Link>
              <Nav.Link href="#deets">Contact Us</Nav.Link>
              <Nav.Link href="#deets">Services</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Fragment>
    )
  }
}

export default NavBar