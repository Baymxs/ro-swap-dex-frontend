import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

function Header() {
    return (
        <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
            <Navbar.Brand>RoSwap</Navbar.Brand>
            <Navbar.Collapse>
                <Nav className='mr-auto'>
                    <Nav.Link>Trade</Nav.Link>
                    <Nav.Link>Earn</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;