import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function FieldEditorModal({ field, show, handleClose, handleSave }) {
  const [label, setLabel] = useState(field.label);
  const [placeholder, setPlaceholder] = useState(field.placeholder);
  const [required, setRequired] = useState(field.required);

  const saveChanges = () => {
    handleSave({ ...field, label, placeholder, required });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Field</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Label</Form.Label>
            <Form.Control
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </Form.Group>
          {field.type === "text" && (
            <Form.Group className="mb-3">
              <Form.Label>Placeholder</Form.Label>
              <Form.Control
                type="text"
                value={placeholder}
                onChange={(e) => setPlaceholder(e.target.value)}
              />
            </Form.Group>
          )}
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Required"
              checked={required}
              onChange={(e) => setRequired(e.target.checked)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={saveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FieldEditorModal;
