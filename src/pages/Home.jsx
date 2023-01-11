import React from "react";
import { Button } from "react-bootstrap";
import Classes from "../styles/Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={Classes.home}>
      <div className={Classes.main_buttons}>
        <Link to="/autobuild">
          <Button variant="primary">Auto Build</Button>{" "}
        </Link>
        <Link to="/manualbuild">
          <Button variant="secondary">Manual Build</Button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Home;
