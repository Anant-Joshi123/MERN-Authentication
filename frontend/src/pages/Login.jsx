import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../api/auth';
import {
  TextField,
  Button,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  Paper,
  Avatar,
  InputAdornment,
  Divider,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      if (remember) {
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('rememberMe');
      }
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #027E7F, #00C7C7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 0,
        overflowY: 'auto',
      }}
    >
      <Box sx={{ position: 'relative', width: '100%', maxWidth: { xs: 340, sm: 400, md: 500 },mx: 'auto',  // 👈 This ensures horizontal centering
      px: { xs: 1, sm: 2 }, }}>
        {/* Floating SIGN IN Header */}
        <Box
          sx={{
            bgcolor: '#00C8C8',
            px: { xs: 3, sm: 5 },
            py: 1.5,
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
            position: 'absolute',
            top: '-24px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: '#1e2a47',
              fontWeight: 'bold',
              fontSize: { xs: '15px', sm: '18px' },
            }}
          >
            SIGN IN
          </Typography>
        </Box>

        <Paper
          elevation={6}
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: '#303753',
            pt: { xs: 6, sm: 8 },
            pb: { xs: 3, sm: 4 },
            width: '100%',
            mx: 'auto',
          }}
        >
          {/* Waves */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '30%',
              zIndex: 1,
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                width: '150%',
                height: '100%',
                background: '#353C68',
                clipPath: 'ellipse(150% 50% at 50% 100%)',
                opacity: 0.9,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                width: '150%',
                height: '100%',
                background: '#2C3862',
                clipPath: 'ellipse(140% 45% at 50% 100%)',
                top: '50px',
                opacity: 0.8,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                width: '150%',
                height: '100%',
                background: '#30395A',
                clipPath: 'ellipse(1000% 400% at 100% 100%)',
                top: '10px',
                opacity: 0.7,
              }}
            />
          </Box>

          {/* Content */}
          <Box sx={{ position: 'relative', zIndex: 2, px: { xs: 2, sm: 4 } }}>
            <Avatar
              sx={{
                bgcolor: '#2f3e5e',
                width: { xs: 65, sm: 85 },
                height: { xs: 65, sm: 85 },
                mx: 'auto',
                mt: { xs: 3, sm: 5 },
                mb: { xs: 2, sm: 3 },
                border: '2px solid #ccc',
              }}
            >
              <AccountCircleIcon sx={{ fontSize: { xs: 30, sm: 42 }, color: '#ccc' }} />
            </Avatar>

            <form onSubmit={handleSubmit}>
              <TextField
                placeholder="username"
                name="email"
                fullWidth
                margin="normal"
                value={form.email}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PersonIcon sx={{ color: '#ccc' }} />
                        <Divider orientation="vertical" flexItem sx={{ borderColor: '#555', height: 24, mx: 1 }} />
                      </Box>
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: '#2f3e5e',
                    borderRadius: '50px',
                    color: '#fff',
                    height: 50,
                    px: 2,
                  },
                }}
                variant="outlined"
              />

              <TextField
                placeholder="password"
                name="password"
                type="password"
                fullWidth
                margin="normal"
                value={form.password}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LockIcon sx={{ color: '#ccc' }} />
                        <Divider orientation="vertical" flexItem sx={{ borderColor: '#555', height: 24, mx: 1 }} />
                      </Box>
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: '#2f3e5e',
                    borderRadius: '50px',
                    color: '#fff',
                    height: 50,
                    px: 2,
                  },
                }}
                variant="outlined"
              />

              <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} mb={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={remember}
                      onChange={() => setRemember(!remember)}
                      color="primary"
                      size="small"
                      sx={{ color: '#00C8C8' }}
                    />
                  }
                  label={
                    <Typography variant="body2" sx={{ color: '#00C8C8', fontSize: { xs: '11px', sm: '13px' } }}>
                      Remember me
                    </Typography>
                  }
                />
                <Link to="#" style={{ fontSize: '11px', color: '#00C8C8' }}>
                  Forgot your password?
                </Link>
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: '#00C8C8',
                  color: '#1e2a47',
                  fontWeight: 'bold',
                  borderRadius: '50px',
                  py: 1.2,
                  fontSize: { xs: '13px', sm: '15px' },
                }}
              >
                LOGIN
              </Button>
            </form>

            <Typography
              variant="body2"
              sx={{
                mt: { xs: 2, sm: 3 },
                textAlign: 'center',
                color: '#fff',
                fontSize: { xs: '12px', sm: '13px' },
              }}
            >
              Don't have an account?{' '}
              <Link to="/register" style={{ color: '#00C8C8', textDecoration: 'none', fontWeight: 'bold' }}>
                Register
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
