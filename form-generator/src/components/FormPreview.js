import React, { useState } from "react";
import FieldEditorModal from "./FieldEditorModal";

function FormPreview({ fields, updateField }) {
  const [selectedField, setSelectedField] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = (field) => {
    setSelectedField(field);
    setShowModal(true);
  };

  const handleSave = (updatedField) => {
    updateField(updatedField);
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-success text-white">
        <h5 className="mb-0">Form Preview</h5>
      </div>
      <div className="card-body">
        <form>
          {fields.length === 0 && (
            <p className="text-muted">No fields added yet.</p>
          )}
          {fields.map((field) => (
            <div key={field.id} className="mb-3">
              <label className="form-label">{field.label}</label>
              {field.type === "text" && (
                <input
                  type="text"
                  className="form-control"
                  placeholder={field.placeholder}
                  required={field.required}
                />
              )}
              {field.type === "checkbox" && (
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    required={field.required}
                  />
                  <label className="form-check-label">{field.label}</label>
                </div>
              )}
              {field.type === "dropdown" && (
                <select className="form-select" required={field.required}>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              )}
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary mt-2"
                onClick={() => handleEditClick(field)}
              >
                Edit
              </button>
            </div>
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
    </div>
  );
}

export default FormPreview;
