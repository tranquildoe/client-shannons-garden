import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "react-bootstrap/Form"
// import FormControl from "react-bootstrap/FormControl"
// import Button from "react-bootstrap/Button"

export default class MyNavBar extends Component {
  render() {
    return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">       
        <Navbar.Brand>Shannon's Garden</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {/* <NavLink exact to="/home" >Home</NavLink> */}
                {/* <NavLink to="/random-beer" >Random Beer</NavLink>
                <NavLink to="/new-beer" >New Beer</NavLink> */}
                {/* Want the dropdown title to be a navLink as well:  */}
                <NavDropdown title="My Dashboard" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Test 1 - My Seed List</NavDropdown.Item>
                    <NavLink to="/myseedlist" >Test 2 - My Seed List</NavLink>

                    <NavDropdown.Item>
                        <NavLink to="/myseedlist" >Test 3 - My Seed List</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">gg link</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">gg link</NavDropdown.Item>
                </NavDropdown>
                {/* <NavLink 
                to="/random-beer" >Random Beer</NavLink> */}

            </Nav>
                  {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                  </Form> */}
        </Navbar.Collapse>
    </Navbar>
    );
  }
}