import React from "react";
import { useNavigate,NavLink } from "react-router-dom";
import style from "./Header.module.css";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    const nevigate = useNavigate();
    return (
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom" style={{background:" #ffc7ab"}}>
            <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-3 fw-bold mx-4" > 📚 Book Notes</span>
            </NavLink> 

            <ul className="nav nav-pills mx-2">
                <li className="nav-item fs-5 mx-2 "><NavLink to="/" className="text-decoration-none text-dark" style={{fontWeight:"500"}}>Home</NavLink> </li>
                <li className="nav-item fs-5 mx-2 "><NavLink to="/about" className="text-decoration-none text-dark" style={{fontWeight:"500"}}>About</NavLink> </li>
                <li className="nav-item fs-5 mx-2 "><NavLink to="/allnotes" className="text-decoration-none text-dark" style={{fontWeight:"500"}}>AllNotes</NavLink></li>
            </ul>
        </header>
    )
}

export default Header;