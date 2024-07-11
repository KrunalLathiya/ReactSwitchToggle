import React from "react";
import {
  Container,
  CssBaseline,
  Typography,
  Box,
  Button,
  Paper,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import SwitchField from "./SwitchField";
import ToggleField from "./ToggleField";
import validationSchema from "../validation/validationSchema";

const FormComponent: React.FC = () => {
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Paper elevation={3} sx={{ mt: 8, p: 4, borderRadius: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            Formik with MUI Switch and Toggle
          </Typography>
          <Formik
            initialValues={{
              switch: false,
              toggle: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form style={{ width: "100%" }}>
                <Box sx={{ my: 3 }}>
                  <Field
                    component={SwitchField}
                    name="switch"
                    type="checkbox"
                    label="Switch"
                  />
                </Box>
                <Box sx={{ my: 3 }}>
                  <Field
                    component={ToggleField}
                    name="toggle"
                    type="checkbox"
                    label="Toggle"
                  />
                </Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  sx={{
                    mt: 3,
                    mb: 2,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    textTransform: "none",
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Paper>
    </Container>
  );
};

export default FormComponent;
