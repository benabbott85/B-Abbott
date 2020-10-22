import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
// import NavTabs from "NavTabs.js"
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap"

function NavTabs() {
//   
  const location = useLocation();
  // const NavTabs=(props) => {
  //   const [collapsed, setCollapsed]= useState(true)
  //   const toggleNavbar = () => setCollapsed(!collapsed)
  

  return (
    // <div>
    //   <Navbar color="faded" light>
    //     <NavbarBrand href="/" className="mr-auto">Ben Abbott</NavbarBrand>
    //     <NavbarToggler onClick={toggleNavbar} className="mr-2" />
    //     <Collapse isOpen={!collapsed} navbar>
    //       <Nav navbar>
    //         <NavItem>
    //           <NavLink href="/about">About</NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
    //         </NavItem>
    //       </Nav>
    //     </Collapse>
    //   </Navbar>
    // </div>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/Home" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Technologies"
          className={location.pathname === "/Technologies" ? "nav-link active" : "nav-link"}
        >
          Technologies
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      
     
      
       
       
     
    </ul>
    
  );
}

export default NavTabs;
