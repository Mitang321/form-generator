import React, { useState } from "react";
import { Button, Form, Modal, ListGroup } from "react-bootstrap";
import FieldEditorModal from "./FieldEditorModal";
import Field from "./Field";

function FormEditor({ onFieldsChange }) {
  const [fields, setFields] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddField = () => {
    setEditIndex(null);
    setShowModal(true);
  };

  const handleEditField = (index) => {
    setEditIndex(index);
    setShowModal(true);
  };

  const handleDeleteField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
    onFieldsChange(newFields);
  };

  const handleFieldChange = (updatedField, index) => {
    const newFields = [...fields];
    newFields[index] = updatedField;
    setFields(newFields);
    onFieldsChange(newFields);
  };

  return (
    <div className="form-editor">
      <Button variant="primary" onClick={handleAddField} className="mb-3">
        Add Field
      </Button>
      <ListGroup>
        {fields.map((field, index) => (
          <ListGroup.Item key={index}>
            <Field
              field={field}
              onEdit={() => handleEditField(index)}
              onDelete={() => handleDeleteField(index)}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
      <FieldEditorModal
        show={showModal}
        onClose={() => setShowModal(false)}
        field={editIndex !== null ? fields[editIndex] : null}
        onSave={(field) => {
          if (editIndex !== null) {
            handleFieldChange(field, editIndex);
          } else {
            setFields([...fields, field]);
            onFieldsChange([...fields, field]);
          }
          setShowModal(false);
        }}
      />
    </div>
  );
}

export default FormEditor;
