export const validateForm = (fields) => {
  const errors = [];

  fields.forEach((field) => {
    if (field.required && !field.placeholder) {
      errors.push(`Field "${field.label}" is required but has no placeholder.`);
    }
  });

  return errors;
};
