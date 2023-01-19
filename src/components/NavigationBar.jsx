import React from "react";
import Classes from "../styles/NavigationBar.module.css";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Account from "./Account";

function NavigationBar() {
  const token = localStorage.getItem("token");

  return (
    <Navbar collapseOnSelect expand="lg" className={Classes.header}>
      <Navbar.Brand style={{ fontWeight: "bold", padding: "5px" }}>
        {token ? (
          <Link
            to="/admin-home"
            style={{ textDecoration: "none", color: "black" }}
          >
            PC-BUILDER
          </Link>
        ) : (
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            PC-BUILDER
          </Link>
        )}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Link to="/autobuild" className={Classes.link}>
            <div className={Classes.title}>Auto-Build</div>
            <div className={Classes.bar}></div>
          </Link>
          <Link to="/manualbuild" className={Classes.link}>
            <div className={Classes.title}>Manual-Build</div>
            <div className={Classes.bar}></div>
          </Link>

          <Account />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
