import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Field from "./Field";
import FieldEditorModal from "./FieldEditorModal";
import FieldDragLayer from "./FieldDragLayer";

function FormPreview({ fields, updateField, setFields }) {
  const [selectedField, setSelectedField] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const moveField = (fromIndex, toIndex) => {
    const updatedFields = [...fields];
    const [movedField] = updatedFields.splice(fromIndex, 1);
    updatedFields.splice(toIndex, 0, movedField);
    setFields(updatedFields);
  };

  const deleteField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  const handleEditClick = (field) => {
    setSelectedField(field);
    setShowModal(true);
  };

  const handleSave = (updatedField) => {
    updateField(updatedField);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="card shadow-sm">
        <div className="card-header bg-success text-white">
          <h5 className="mb-0">Form Preview</h5>
        </div>
        <div className="card-body">
          <form>
            {fields.length === 0 && (
              <p className="text-muted">No fields added yet.</p>
            )}
            {fields.map((field, index) => (
              <Field
                key={field.id}
                index={index}
                field={field}
                moveField={moveField}
                handleEditClick={handleEditClick}
                deleteField={deleteField}
              />
            ))}
          </form>
        </div>
        {selectedField && (
          <FieldEditorModal
            field={selectedField}
            show={showModal}
            handleClose={() => setShowModal(false)}
            handleSave={handleSave}
          />
        )}
        <FieldDragLayer />
      </div>
    </DndProvider>
  );
}

export default FormPreview;
