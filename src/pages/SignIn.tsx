import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  TextField,
  Button,
  Typography,
  FormControl,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { BlueButton, CustomForm, FormBox } from "./../commonStyle/CommonStyle";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from "react-redux";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});
const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function SignIn() {
  const [language, setLanguage] = React.useState("English");
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios.post(`${BASE_URL}/sign-in`, {
        email: values.email,
        password: values.password
      }, {
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": 'en'
        }
      }).then((res) => {
        console.log(res.data);
        localStorage.setItem('token', res.data);
        dispatch({ type: 'IS_LOGIN' });
        navigate("/")
      })
        .catch((error) => console.log(error));
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
      <Box width='500px'>
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
            <span>Sign in </span>
            <span style={{ fontWeight: "bold" }}>Rounx </span>
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
          <FormControl>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              helperText={formik.touched.password && formik.errors.password}
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
          </FormControl>
          <Box style={{ margin: "10px 0px" }}>
            <Button
              className="normal-text round-button"
              variant="outlined"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password?
            </Button>
            <BlueButton type="submit" style={{ float: "right" }}>
              Sign in
            </BlueButton>
          </Box>
          <Button onClick={() => navigate("/sign-up")} className="normal-text round-button" variant="outlined">
            Create account
          </Button>
        </CustomForm>
      </Box>

    </FormBox>
  );
}
