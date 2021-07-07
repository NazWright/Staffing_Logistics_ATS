import React, { useState } from "react";

const Tag = ({ label, selected, callback }) => {
  const onClose = () => {
    callback(false);
  };

  return (
    <li
      className="badge badge-primary"
      style={{
        display: selected ? undefined : "none",
        listStyle: "none",
        marginRight: "5px",
      }}
    >
      {label}
      <span className="close-button" onClick={onClose}>
        x
      </span>
    </li>
  );
};

export default Tag;
