import React from "react";
import Input from "./elements/Input";

const Element = ({ element: { field, id, name, label, type, placeholder } }) => {
  if (field === "text") {
    return <Input id={id} name={name} label={label} type={type} placeholder={placeholder} />;
  } else {
    return null;
  }
};

export default Element;
