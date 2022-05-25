import React from "react";
import TextField from "@mui/material/TextField";

export default function CustomTextField({
  id,
  label,
  onChange,
  value,
  ...rest
}) {
  return (
    <>
      <TextField
        id={id}
        label={label}
        type="text"
        style={{ width: "300px", margin: "10px" }}
        onChange={onChange}
        value={value}
      />
      <br />
    </>
  );
}
