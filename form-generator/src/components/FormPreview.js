import React from "react";

function FormPreview({ fields }) {
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
                <input type="text" className="form-control" />
              )}
              {field.type === "checkbox" && (
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label">{field.label}</label>
                </div>
              )}
              {field.type === "dropdown" && (
                <select className="form-select">
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              )}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default FormPreview;
