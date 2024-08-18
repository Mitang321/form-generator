import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Field from "./Field";
import FieldEditorModal from "./FieldEditorModal";
import FieldCustomization from "./FieldCustomization";

function FormEditor() {
  const [fields, setFields] = useState([]);
  const [showEditorModal, setShowEditorModal] = useState(false);
  const [selectedField, setSelectedField] = useState(null);

  const handleAddField = () => {
    setSelectedField(null);
    setShowEditorModal(true);
  };

  const handleEditField = (field) => {
    setSelectedField(field);
    setShowEditorModal(true);
  };

  const handleDeleteField = (field) => {
    setFields(fields.filter((f) => f !== field));
  };

  const handleSaveField = (newField) => {
    if (selectedField) {
      setFields(fields.map((f) => (f === selectedField ? newField : f)));
    } else {
      setFields([...fields, newField]);
    }
    setShowEditorModal(false);
  };

  return (
    <div>
      <h2 className="mb-4">Form Editor</h2>
      <Button variant="primary" onClick={handleAddField} className="mb-4">
        Add Field
      </Button>
      <div>
        {fields.map((field, index) => (
          <Field
            key={index}
            field={field}
            onEdit={() => handleEditField(field)}
            onDelete={() => handleDeleteField(field)}
          />
        ))}
      </div>
      <FieldEditorModal
        show={showEditorModal}
        field={selectedField}
        onHide={() => setShowEditorModal(false)}
        onSave={handleSaveField}
      />
    </div>
  );
}

export default FormEditor;
