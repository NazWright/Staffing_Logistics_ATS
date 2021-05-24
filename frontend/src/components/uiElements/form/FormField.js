import React from "react";

export default function FormField({
  type,
  placeholder,
  name,
  id,
  label,
  required,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name} className="control-label">
        {required ? `${label}*` : label}
      </label>
      <input
        type={type}
        name={name}
        className="form-control"
        id={id}
        placeholder={placeholder}
        maxLength="100"
        required={required}
      />
    </div>
  );
}
