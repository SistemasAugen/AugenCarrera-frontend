import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import { Link, Stack, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';
import { AuthService } from "../../../services/auth-service";

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Debe poner un email valido').required('Email es requerido'),
    password: Yup.string().required('Contraseña es requerida'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: (values, actions) => {
      delete values.remember;
      AuthService.login(values)
      .then(result => {
        actions.setSubmitting(false);
        AuthService.setUserAuth(result.data);
        navigate('/dashboard/app', { replace: true });
      }).catch(err =>{
        actions.setSubmitting(false);
        console.error("ERROR",err);
      })
    },
  });

  // handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTrget);
  //   const form = {
  //     email: formData.get('email'),
  //     password: formData.get('password')
  //   };
  //   const { data } = await axios.post("http://localhost:3000/dashboard/api", form);
  //   if (data.status == parseInt('401')) {
  //     setErrorMessage(data.response)
  //   } else {
  //     localStorage.setItem('token', data.token);
  //     setIsLo
  //   }
  // };

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Id/RFC/Email "
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Contraseña"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
            Olvidaste la contraseña?
          </Link>
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Iniciar sesion
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
