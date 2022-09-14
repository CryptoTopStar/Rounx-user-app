import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { CustomForm, FormBox, BlueButton } from "../commonStyle/CommonStyle";
import {
  TextField,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
  Box,
  Button
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPwd: yup
    .string()
    .when("password", {
      is: (value: string) => (value && value.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref("password")], "Passwords do not match"),
    })
    .required("This field is required")
});

export default function ForgotPassword() {
  const [language, setLanguage] = React.useState("English");
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPwd: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate("/verification-email");
    },
  });

  const handleChange = (event: any) => {
    setLanguage(event.target.value as string);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormBox>
      <Box>
        <CustomForm onSubmit={formik.handleSubmit}>
          <img
            src="logo.png"
            alt="Rounx admin"
            width="90px"
            height="90px"
            style={{ color: "#336def", alignSelf: "center" }}
          />
          <Typography
            style={{
              fontSize: "20px",
              textAlign: "center",
              marginTop: "-10px",
              marginBottom: "20px",
            }}
          >
            Reset Password
          </Typography>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField label="Enter code" />
          <Box display='flex' justifyContent='space-between' >
            <TextField
              sx={{ mr: 2 }}
              id="password"
              name="password"
              label="Set password"
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              helperText={"At least 8 characters"}
              error={formik.touched.password && Boolean(formik.errors.password)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="confirmPwd"
              name="confirmPwd"
              type="password"
              label="Confirm password"
              value={formik.values.confirmPwd}
              onChange={formik.handleChange}
              error={formik.touched.confirmPwd && Boolean(formik.errors.confirmPwd)}
              helperText={formik.touched.confirmPwd && formik.errors.confirmPwd}
            />
          </Box>

          <Box style={{ margin: "10px 0px", display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button
              sx={{ mr: 2 }}
              className="normal-text round-button"
              onClick={() => navigate("/forgot-password")}
            >
              Send code
            </Button>
            <BlueButton type="submit">
              Next
            </BlueButton>
          </Box>
        </CustomForm>
      </Box>

    </FormBox>
  );
}
