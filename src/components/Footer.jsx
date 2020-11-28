import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
       
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/bacadlo"
          aria-label="My GitHub"
        >
          
        </a>{" "}
       
        <p>
          <small className="text-muted">
           
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
