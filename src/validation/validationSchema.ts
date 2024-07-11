import * as Yup from "yup";

const validationSchema = Yup.object({
  switch: Yup.boolean().oneOf([true], "Switch must be turned on"),
  toggle: Yup.boolean().oneOf([true], "Toggle must be turned on"),
});

export default validationSchema;
