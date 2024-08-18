import React, { useState } from "react";
import FormEditor from "./components/FormEditor";
import FormPreview from "./components/FormPreview";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [fields, setFields] = useState([]);

  const updateFields = (newFields) => {
    setFields(newFields);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>Form Editor</h2>
          <FormEditor onFieldsChange={updateFields} />
        </Col>
        <Col md={6}>
          <h2>Form Preview</h2>
          <FormPreview fields={fields} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
