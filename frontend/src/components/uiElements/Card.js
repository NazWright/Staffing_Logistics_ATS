import React from "react";

export default function Card({ children }) {
  const cardStyle = {
    borderRadius: "10px",
    paddingTop: "1.875rem",
    paddingLeft: "1.5625rem",
    paddingRight: "1.5625rem",
    paddingBottom: "1.25rem",
    marginBottom: "1.875rem",
    backgroundColor: "#fff",
  };
  return (
    <div className="col-12 col-lg-6">
      <div style={cardStyle}>{children && children}</div>
    </div>
  );
}
