import { useForm, Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import registerServices from '../services/register';
import { roles } from '../data';

const Register = () => {
  const { control, register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      // set a error message
      return;
    }
    data.email = data.email.toLowerCase();
    // dispatch(registerUser(data));
    const res = await registerServices.handleRegister(data);
    console.log(res);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '10px',
          mt: '8px',
          padding: 2,
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={6}>
              <TextField
                label="First name"
                margin="normal"
                fullWidth
                {...register('firstName')}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last name"
                margin="normal"
                fullWidth
                {...register('lastName')}
              ></TextField>
            </Grid>
          </Grid>

          <TextField
            label="Email"
            required
            fullWidth
            margin="normal"
            {...register('email')}
          ></TextField>
          <TextField
            label="Password"
            type="password"
            required
            fullWidth
            margin="normal"
            {...register('password')}
          ></TextField>
          <TextField
            label="Confirm password"
            type="password"
            required
            fullWidth
            margin="normal"
            {...register('confirmPassword')}
          ></TextField>

          <Controller
            name="role"
            render={({ field }) => (
              <>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Role</InputLabel>
                  <Select {...field} label="role">
                    {roles.map((role) => (
                      <MenuItem key={role.id} value={role.data}>
                        {role.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </>
            )}
            control={control}
            defaultValue=""
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, mb: 3 }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default Register;
