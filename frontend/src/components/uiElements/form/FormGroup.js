import React from "react";

export default function FormGroup({ children }) {
  return (
    <div className="form-group">
      <label htmlFor="firstName" className="control-label">
        First Name*
      </label>
      <input
        type="text"
        name="firstName"
        className="form-control"
        id="firstName"
        placeholder="First Name"
        maxLength="100"
        required
      />
    </div>
  );
}
