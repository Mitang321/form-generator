import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Field from "./Field";
import FieldEditorModal from "./FieldEditorModal";
import FieldDragLayer from "./FieldDragLayer";
import { ItemTypes } from "./ItemTypes";
function FormEditor() {
  const [fields, setFields] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentField, setCurrentField] = useState(null);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.FIELD,
    drop: (item) => moveField(item.index),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const moveField = (index) => {
    const field = fields[index];
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields([field, ...updatedFields]);
  };

  const handleAddField = () => {
    const newField = { label: "", type: "text", required: false };
    setCurrentField(newField);
    setShowModal(true);
  };

  const handleSaveField = (field) => {
    setFields([...fields, field]);
    setShowModal(false);
  };

  const handleEditField = (index) => {
    setCurrentField({ ...fields[index], index });
    setShowModal(true);
  };

  const handleUpdateField = (field) => {
    const updatedFields = [...fields];
    updatedFields[field.index] = field;
    setFields(updatedFields);
    setShowModal(false);
  };

  const handleDeleteField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  return (
    <div
      ref={drop}
      style={{
        minHeight: "400px",
        border: isOver ? "2px solid green" : "2px dashed gray",
      }}
    >
      <button className="btn btn-primary mb-3" onClick={handleAddField}>
        Add Field
      </button>
      <div className="field-list">
        {fields.map((field, index) => (
          <Field
            key={index}
            index={index}
            field={field}
            onEdit={() => handleEditField(index)}
            onDelete={() => handleDeleteField(index)}
          />
        ))}
      </div>
      {showModal && (
        <FieldEditorModal
          field={currentField}
          onSave={
            currentField.index !== undefined
              ? handleUpdateField
              : handleSaveField
          }
          onClose={() => setShowModal(false)}
        />
      )}
      <FieldDragLayer />
    </div>
  );
}

export default FormEditor;
