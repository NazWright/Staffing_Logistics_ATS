import React from "react";

export default function CheckBoxGroup({ title, children }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h3>{title}</h3>
      <ul style={{ listStyle: "none" }}>{children && children}</ul>
    </div>
  );
}
