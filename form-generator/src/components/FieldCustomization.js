import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function FieldCustomization({ field, show, handleClose, handleSave }) {
  const [label, setLabel] = useState(field.label || "");
  const [placeholder, setPlaceholder] = useState(field.placeholder || "");
  const [required, setRequired] = useState(field.required || false);
  const [options, setOptions] = useState(field.options || []);

  const handleOptionsChange = (e) => {
    const value = e.target.value;
    setOptions(value.split("\n"));
  };

  const saveChanges = () => {
    handleSave({
      ...field,
      label,
      placeholder,
      required,
      options,
    });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Customize Field</Modal.Title>
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
          <Form.Group className="mb-3">
            <Form.Label>Placeholder</Form.Label>
            <Form.Control
              type="text"
              value={placeholder}
              onChange={(e) => setPlaceholder(e.target.value)}
              disabled={field.type !== "text"}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Required"
              checked={required}
              onChange={(e) => setRequired(e.target.checked)}
            />
          </Form.Group>
          {field.type === "dropdown" && (
            <Form.Group className="mb-3">
              <Form.Label>Options (one per line)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={options.join("\n")}
                onChange={handleOptionsChange}
              />
            </Form.Group>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={saveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FieldCustomization;
