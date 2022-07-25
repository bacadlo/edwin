import React from "react";
import Typist from "react-typist";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1"
            style={{
                fontSize: 80,                
                color: "black",
                margin: "0 15px",
                animation: "animate 3s linear infinite",
               
              }}>
            {title}
          </h1>
          <div id="introMsg" style={{
                  fontSize: 20,                
                  color: "black",
                  margin: "5 15px",
                  marginTop: "15px",
                  animation: "animate 3s linear infinite",
                  
                }}>
                   {" "}
                   {message}
          </div>
          
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
            style={{
              fontSize: 30,
              backgroundColor: "#18191f",
              color: "#fff",
              boxShadow: "2px 2px 2px #00000080, 10px 1px 10px #00000080,2px 2px 10px #00000080, 2px 2px 3px #00000080, inset 2px 2px 10px #00000080,inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080,inset 2px 2px 10px #00000080",
              borderRadius: "10px",
              padding: "8px 8px",
              margin: "0 15px",
              borderWidth:"0",
              animation: "animate 3s linear infinite",
              textShadow: "0 0 5px #0072ff, 0 0 10px #0072ff, 0 0 15px #0072ff, 0 0 20px #0072ff"
            }}
          >
            More about me 
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;

/*<Text 
            className="lead typist" 
            cursor={{ show: false }} 
            style={{
                  fontSize: 12,                
                  color: "#fff",
                  margin: "0 15px",
                  animation: "animate 3s linear infinite",
                  textShadow: "0 0 5px #0072ff, 0 0 10px #0072ff, 0 0 15px #0072ff, 0 0 20px #0072ff"
                }}>
            {" "}
            {message}
          </Text>*/