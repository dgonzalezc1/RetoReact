import React from "react";
import useForm from "../../customHooks";

const Input = ({ id, name, label, type, placeholder }) => {
  const { handleInputChange } = useForm();

  return (
    <div className="mb-3">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        name={name}
        aria-describedby="emailHelp"
        placeholder={placeholder}
        autoComplete={type}
        onChange={e => handleInputChange(e)}
      />
    </div>
  );
};

export default Input;
