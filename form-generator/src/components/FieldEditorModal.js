import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function FieldEditorModal({ field, onSave, onClose }) {
  const [label, setLabel] = useState(field.label || "");
  const [type, setType] = useState(field.type || "text");
  const [required, setRequired] = useState(field.required || false);
  const [minLength, setMinLength] = useState(field.minLength || "");
  const [maxLength, setMaxLength] = useState(field.maxLength || "");
  const [pattern, setPattern] = useState(field.pattern || "");

  const handleSubmit = () => {
    onSave({
      label,
      type,
      required,
      minLength,
      maxLength,
      pattern,
      index: field.index,
    });
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Field</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formFieldLabel">
            <Form.Label>Label</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter field label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formFieldType">
            <Form.Label>Type</Form.Label>
            <Form.Control
              as="select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="password">Password</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formFieldRequired">
            <Form.Check
              type="checkbox"
              label="Required"
              checked={required}
              onChange={(e) => setRequired(e.target.checked)}
            />
          </Form.Group>
          {type === "text" && (
            <>
              <Form.Group controlId="formFieldMinLength">
                <Form.Label>Min Length</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Min length"
                  value={minLength}
                  onChange={(e) => setMinLength(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formFieldMaxLength">
                <Form.Label>Max Length</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Max length"
                  value={maxLength}
                  onChange={(e) => setMaxLength(e.target.value)}
                />
              </Form.Group>
            </>
          )}
          {type === "email" && (
            <Form.Group controlId="formFieldPattern">
              <Form.Label>Pattern</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email pattern"
                value={pattern}
                onChange={(e) => setPattern(e.target.value)}
              />
            </Form.Group>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FieldEditorModal;
