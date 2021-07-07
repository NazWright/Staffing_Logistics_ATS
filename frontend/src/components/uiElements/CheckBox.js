import React, { useState } from "react";

export default function CheckBox({
  label,
  value,
  name,
  checkBoxOnChange,
  checked,
}) {
  const checkBoxChange = (e) => {
    checkBoxOnChange(e.target.checked, name);
  };

  return (
    <span>
      &nbsp;
      <label>
        <input
          type="checkbox"
          name={name}
          value={value}
          className="checkbox"
          onChange={checkBoxChange}
          checked={checked}
        />
        {label}
      </label>
    </span>
  );
}
