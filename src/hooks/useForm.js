import { useState } from "react";

/* 

// ----- Custom Hook useForm -----

*/
// You want export fn here, not default:
export function useForm(initialValues = {}) {
  const [formValues, setFormValues] = useState(initialValues);

  function handleChange(event) {
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormValues({
      ...formValues,
      [event.target.name]: value
    });
  }
// getInputProps here goes to line 35 of Form.jsx
  function getInputProps(fieldName) {
    return {
      name: fieldName,
      value: formValues[fieldName] || "",
      checked: formValues[fieldName] || false,
      onChange: handleChange
    };
  }
// returning state:
// below is what you return from your hook:
  return {
    formValues,
    getInputProps,
    handleChange
  };
}