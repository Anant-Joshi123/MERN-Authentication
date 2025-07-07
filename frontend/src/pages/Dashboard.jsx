import { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Typography, IconButton, Paper, Button, Stack } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

// Generate 25 dummy users
const users = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
  dateCreated: `0${(i % 9) + 1}/1${(i % 2) + 0}/2023`,
  role: ['Admin', 'Publisher', 'Reviewer', 'Moderator'][i % 4],
  status: ['Active', 'Suspended', 'Inactive'][i % 3],
}));

export default function Dashboard() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('rememberMe');
    navigate('/');
  };

  const totalPages = Math.ceil(users.length / rowsPerPage);
  const currentData = users.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const getStatusColor = (status) => {
    if (status === 'Active') return 'green';
    if (status === 'Suspended') return 'red';
    return 'orange';
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        background: '#f0f2f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: '1100px' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>#</b></TableCell>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Date Created</b></TableCell>
                <TableCell><b>Role</b></TableCell>
                <TableCell><b>Status</b></TableCell>
                <TableCell><b>Action</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentData.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Avatar src={user.avatar} alt={user.name} />
                      <Typography>{user.name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{user.dateCreated}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          backgroundColor: getStatusColor(user.status),
                        }}
                      />
                      <Typography>{user.status}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <IconButton sx={{ color: '#1976d2' }}>
                      <SettingsIcon />
                    </IconButton>
                    <IconButton
                      sx={{
                        backgroundColor: '#f44336',
                        color: '#fff',
                        borderRadius: '50%',
                        width: 32,
                        height: 32,
                        ml: 1,
                        '&:hover': {
                          backgroundColor: '#d32f2f',
                        },
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} mt={2}>
          <Button
            size="small"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i + 1}
              size="small"
              variant={currentPage === i + 1 ? 'contained' : 'outlined'}
              onClick={() => setCurrentPage(i + 1)}
              sx={{
                minWidth: 32,
                height: 32,
                p: 0,
                borderRadius: '4px',
              }}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            size="small"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </Button>
        </Stack>

        {/* Logout Button */}
        <Stack direction="row" justifyContent="flex-end" mt={3}>
          <Button variant="contained" color="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
