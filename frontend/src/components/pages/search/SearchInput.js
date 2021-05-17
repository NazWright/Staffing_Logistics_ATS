import React from "react";

export default function SearchInput({
  type,
  placeholder,
  name,
  icon,
  title,
  filter,
}) {
  return (
    <div style={{ height: "100%" }}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
