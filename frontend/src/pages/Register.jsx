import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../api/auth';
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Avatar,
  InputAdornment,
  Divider,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    dob: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
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
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: { xs: 340, sm: 400, md: 500 },
          mx: 'auto',
          px: { xs: 1, sm: 2 },
        }}
      >
        {/* Floating REGISTER Header */}
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
            REGISTER
          </Typography>
        </Box>

        <Paper
          elevation={6}
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: '#303753',
            pt: { xs: 6, sm: 7 },
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
              <PersonAddIcon sx={{ fontSize: { xs: 30, sm: 42 }, color: '#ccc' }} />
            </Avatar>

            <form onSubmit={handleSubmit}>
              <TextField
                placeholder="Full Name"
                name="name"
                fullWidth
                margin="normal"
                value={form.name}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonAddIcon sx={{ color: '#ccc' }} />
                      <Divider orientation="vertical" flexItem sx={{ borderColor: '#555', height: 24, mx: 1 }} />
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
                placeholder="Date of Birth"
                name="dob"
                type="date"
                fullWidth
                margin="normal"
                value={form.dob}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarTodayIcon sx={{ color: '#ccc' }} />
                      <Divider orientation="vertical" flexItem sx={{ borderColor: '#555', height: 24, mx: 1 }} />
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
                placeholder="Email"
                name="email"
                type="email"
                fullWidth
                margin="normal"
                value={form.email}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: '#ccc' }} />
                      <Divider orientation="vertical" flexItem sx={{ borderColor: '#555', height: 24, mx: 1 }} />
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
                placeholder="Password"
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
                      <LockIcon sx={{ color: '#ccc' }} />
                      <Divider orientation="vertical" flexItem sx={{ borderColor: '#555', height: 24, mx: 1 }} />
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

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: { xs: 2, sm: 3 },
                  bgcolor: '#00C8C8',
                  color: '#1e2a47',
                  fontWeight: 'bold',
                  borderRadius: '50px',
                  py: 1.3,
                  fontSize: { xs: '13px', sm: '15px' },
                }}
              >
                REGISTER
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
              Already have an account?{' '}
              <Link to="/" style={{ color: '#00C8C8', textDecoration: 'none', fontWeight: 'bold' }}>
                Login here
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
