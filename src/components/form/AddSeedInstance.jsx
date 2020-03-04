// Already have?:
// bootstrap.bundle.min.js / bootstrap.bundle.js


import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

export default class AddSeedInstance extends Component {
    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Choose a Plant Type
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Each Plant Here</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}








// import React, { Component } from "react";

// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Nav from "react-bootstrap/Nav";
// import { NavLink } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';

// // import Form from "react-bootstrap/Form"
// // import FormControl from "react-bootstrap/FormControl"
// // import Button from "react-bootstrap/Button"




// export default class MyNavBar extends Component {
//   render() {
//     return (
//     <Navbar sticky="top" bg="dark" variant="dark" expand="lg">       
//         <Navbar.Brand>Shannon's Garden</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mr-auto">
//                 {/* <NavLink exact to="/home" >Home</NavLink> */}
//                 {/* <NavLink to="/random-beer" >Random Beer</NavLink>
//                 <NavLink to="/new-beer" >New Beer</NavLink> */}
//                 {/* Want the dropdown title to be a navLink as well:  */}
//                 <NavDropdown className="navDrop" title="My Links" id="basic-nav-dropdown">
//                     <NavDropdown.Item href="/mydashboard">My Dashboard</NavDropdown.Item>
//                     <NavDropdown.Item href="/myseedlist">My Seed List</NavDropdown.Item>
//                     <NavDropdown.Item href="/mywishlist">My Wish List</NavDropdown.Item>
//                     <NavDropdown.Item href="/myprofile">My Profile</NavDropdown.Item>
//                 </NavDropdown>

//                 <NavDropdown className="navDrop" title="Main" id="basic-nav-dropdown">

//                 {/* add an anchor to the search on the start page:  */}
//                     <NavDropdown.Item href="/">Home</NavDropdown.Item>
//                     <NavDropdown.Item href="/">Search</NavDropdown.Item>
//                     <NavDropdown.Item href="/about">About</NavDropdown.Item>
//                 </NavDropdown>

//                 <NavLink className="navLink" to="/logout" >Logout</NavLink>

//             </Nav>
//                   {/* <Form inline>
//                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                     <Button variant="outline-success">Search</Button>
//                   </Form> */}
//         </Navbar.Collapse>
//     </Navbar>
//     );
//   }
// }