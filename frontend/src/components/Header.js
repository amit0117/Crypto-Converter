import React from 'react'

import {LinkContainer} from 'react-router-bootstrap'
import{Navbar,Container} from 'react-bootstrap'

const Header = () => {
   
  return (
    <header>
      <Navbar bg='dark' variant='dark' collapseOnSelect expand="lg">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand >CyptoConverter</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
          </Navbar.Collapse>
        </Container>
      </Navbar>    
    </header>
  )
}

export default Header
