import React from "react";

function FormEditor({ addField }) {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Add Form Field</h5>
      </div>
      <div className="card-body">
        <div className="btn-group-vertical w-100">
          <button
            className="btn btn-outline-primary mb-2"
            onClick={() => addField("text")}
          >
            Text Input
          </button>
          <button
            className="btn btn-outline-primary mb-2"
            onClick={() => addField("checkbox")}
          >
            Checkbox
          </button>
          <button
            className="btn btn-outline-primary mb-2"
            onClick={() => addField("dropdown")}
          >
            Dropdown
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormEditor;
