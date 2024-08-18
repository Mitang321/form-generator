import React from "react";

function FormPreview({ fields = [] }) {
  return (
    <form>
      {fields.map((field, index) => (
        <div key={index} className="mb-3">
          <label>{field.label}</label>
          <input
            type={field.type}
            required={field.required}
            minLength={field.minLength || undefined}
            maxLength={field.maxLength || undefined}
            pattern={field.pattern || undefined}
            className="form-control"
            placeholder={`Enter ${field.label}`}
          />
        </div>
      ))}
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
}

export default FormPreview;
