import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import apiHandler from "./../../api/APIHandler";
import "bootstrap/dist/css/bootstrap.min.css";

class MyNavBar extends Component {
  handleSignout = e => {
    apiHandler
      .post("/signout")
      .then(apiRes => {
        this.props.history.push("/signin")
      })
      .catch(apiErr => console.error(apiErr));
  };

  render() {
    return (
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>Shannon's Garden</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              className="navDrop"
              title="Main"
              id="basic-nav-dropdown"
            >
              {/* add an anchor to the search on the start page:  */}
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="navDrop"
              title="My Links"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/mydashboard">
                My Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item href="/myseedlist">
                My Seed List
              </NavDropdown.Item>
              <NavDropdown.Item href="/mywishlist">
                My Wish List
              </NavDropdown.Item>
              <NavDropdown.Item href="/mydashboard">
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Item onClick={this.handleSignout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(MyNavBar);
