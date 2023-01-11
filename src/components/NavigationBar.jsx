import React from "react";
import Classes from "../styles/NavigationBar.module.css"
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className={Classes.header}>
      <div className={Classes.logo}>
        <Link to="/" style={{textDecoration: "none", color: "black"}}>
        PC-BUILDER
        </Link>
      </div>
      <div className={Classes.menu}>
        {/* <Link to="/" className={Classes.link}>
          <div className={Classes.title}>About</div>
          <div className={Classes.bar}></div>
        </Link> */}
        <Link to="/autobuild" className={Classes.link}>
          <div className={Classes.title}>Auto-Build</div>
          <div className={Classes.bar}></div>
        </Link>
        <Link to="/manualbuild" className={Classes.link}>
          <div className={Classes.title}>Manual-Build</div>
          <div className={Classes.bar}></div>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
