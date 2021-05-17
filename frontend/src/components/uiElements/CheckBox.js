import React, { useState } from "react";

export default function CheckBox({ label }) {
  const [checked, setChecked] = useState(false);
  const onCheck = (event) => {
    setChecked(true);
  };
  return (
    <li onClick={onCheck}>
      <span>
        <input type="checkbox" name="checkboxInput" />
        <label htmlFor="checkboxInput">{label}</label>
      </span>
    </li>
  );
}
