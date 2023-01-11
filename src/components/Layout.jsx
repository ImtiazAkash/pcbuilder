import React from "react";
import NavigationBar from "./NavigationBar";
import { Container } from "react-bootstrap";

function Layout({children}) {
  return (
    <div>
      <NavigationBar />
      <Container>{children}</Container>
    </div>
  );
}

export default Layout;
