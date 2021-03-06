import React from "react";
const Input = ({ type, name, label, value, onChange, autoFocus, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        id={name}
        className="form-control"
        autoFocus={autoFocus ? true : false}
      />
      {/* If error is not null or truthy then return div */}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
