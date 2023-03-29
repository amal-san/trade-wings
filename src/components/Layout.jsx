import React from "react";
import { Container } from "semantic-ui-react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <Container className="cnt">
      <Header />
      <Container fluid style={{ height: "80%" }}>
        <div className="main-content"></div>
        <div className="main-sub">
          <p>
            Trade Wings coming soon<span>.......</span>
          </p>
        </div>
      </Container>
      <Footer />
    </Container>
  );
};

export default Layout;
