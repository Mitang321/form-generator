import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function FieldEditorModal({ show, onClose, field, onSave }) {
  const [label, setLabel] = useState("");
  const [type, setType] = useState("text");
  const [required, setRequired] = useState(false);
  const [minLength, setMinLength] = useState("");
  const [maxLength, setMaxLength] = useState("");
  const [pattern, setPattern] = useState("");

  useEffect(() => {
    if (field) {
      setLabel(field.label);
      setType(field.type);
      setRequired(field.required);
      setMinLength(field.minLength || "");
      setMaxLength(field.maxLength || "");
      setPattern(field.pattern || "");
    }
  }, [field]);

  const handleSave = () => {
    onSave({ label, type, required, minLength, maxLength, pattern });
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{field ? "Edit Field" : "Add Field"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formLabel">
            <Form.Label>Label</Form.Label>
            <Form.Control
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="Field label"
            />
          </Form.Group>
          <Form.Group controlId="formType" className="mt-3">
            <Form.Label>Type</Form.Label>
            <Form.Control
              as="select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="number">Number</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formRequired" className="mt-3">
            <Form.Check
              type="checkbox"
              label="Required"
              checked={required}
              onChange={(e) => setRequired(e.target.checked)}
            />
          </Form.Group>
          <Form.Group controlId="formMinLength" className="mt-3">
            <Form.Label>Minimum Length</Form.Label>
            <Form.Control
              type="number"
              value={minLength}
              onChange={(e) => setMinLength(e.target.value)}
              placeholder="Minimum length"
            />
          </Form.Group>
          <Form.Group controlId="formMaxLength" className="mt-3">
            <Form.Label>Maximum Length</Form.Label>
            <Form.Control
              type="number"
              value={maxLength}
              onChange={(e) => setMaxLength(e.target.value)}
              placeholder="Maximum length"
            />
          </Form.Group>
          <Form.Group controlId="formPattern" className="mt-3">
            <Form.Label>Pattern</Form.Label>
            <Form.Control
              type="text"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder="Pattern"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FieldEditorModal;
