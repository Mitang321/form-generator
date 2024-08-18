import React from "react";
import { Button } from "react-bootstrap";

function FormPreview({ fields = [] }) {
  return (
    <form className="form-preview">
      {fields.map((field, index) => (
        <div key={index} className="mb-3">
          <label htmlFor={`field-${index}`} className="form-label">
            {field.label}
          </label>
          <input
            id={`field-${index}`}
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
      <Button type="submit" variant="success">
        Submit
      </Button>
    </form>
  );
}

export default FormPreview;
