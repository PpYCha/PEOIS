import { TextField } from "@mui/material";
import React from "react";

const CustomTextField = ({
  id,
  label,
  name,
  onChange,
  value,

  ...props
}) => {
  return (
    <TextField
      sx={{ marginBottom: 1 }}
      id={label}
      label={label}
      name={name}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};

export default CustomTextField;
