import React from "react";
import { FieldProps, getIn } from "formik";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Checkbox,
} from "@mui/material";

const ToggleField: React.FC<FieldProps & { label: string }> = ({
  field,
  form,
  label,
}) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <FormControl error={!!errorText} component="fieldset" variant="standard">
      <FormControlLabel
        control={
          <Checkbox
            {...field}
            checked={field.value}
            onChange={(event) => {
              form.setFieldValue(field.name, event.target.checked);
            }}
          />
        }
        label={label}
      />
      {errorText && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
};

export default ToggleField;
