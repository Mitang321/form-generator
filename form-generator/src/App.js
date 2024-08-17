import React, { useState } from "react";
import FormEditor from "./components/FormEditor";
import FormPreview from "./components/FormPreview";
import "./App.css";

function App() {
  const [fields, setFields] = useState([]);

  const addField = (type) => {
    const newField = {
      id: Date.now(),
      type,
      label: `Field ${fields.length + 1}`,
      placeholder: "",
      required: false,
    };
    setFields([...fields, newField]);
  };

  const updateField = (updatedField) => {
    setFields(
      fields.map((field) =>
        field.id === updatedField.id ? updatedField : field
      )
    );
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <FormEditor addField={addField} />
        </div>
        <div className="col-md-8">
          <FormPreview
            fields={fields}
            updateField={updateField}
            setFields={setFields}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
