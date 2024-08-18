import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import FormEditor from "./components/FormEditor";
import FormPreview from "./components/FormPreview";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Form Generator</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#editor">Form Editor</Nav.Link>
              <Nav.Link href="#preview">Form Preview</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <div id="editor">
          <FormEditor />
        </div>
        <div id="preview" className="mt-5">
          <FormPreview />
        </div>
      </Container>
    </div>
  );
}

export default App;
