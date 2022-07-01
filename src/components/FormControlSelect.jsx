import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";

const FormControlSelect = ({
  idLabel,
  inputLabel,
  labelId,
  idSelect,
  value,
  label,
  onChange,
  menuItem,
  formHelperText,
}) => {
  const [office, setOffice] = useState("");

  const handleChangeOffice = (e) => {
    setOffice(e.target.value);
  };

  return (
    <>
      <FormControl
        fullWidth
        error={
          typeof formHelperText === "undefined" || formHelperText === false
            ? false
            : true
        }
      >
        <InputLabel id={idLabel}>{inputLabel}</InputLabel>
        <Select
          defaultValue=""
          labelId={labelId}
          id={idSelect}
          value={value}
          label={label}
          onChange={onChange}
        >
          {menuItem.map((menuItems) => (
            <MenuItem key={menuItems.id} value={menuItems.value}>
              {menuItems.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText error={true} disabled={true}>
          {formHelperText}
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default FormControlSelect;
