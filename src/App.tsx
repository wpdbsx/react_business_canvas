import React from 'react';

import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';

import ResourceView from './pages/ResourceView';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Badge, Box, Grid, IconButton, MenuItem, MenuList, Paper, Toolbar, Typography } from '@mui/material';

function App() {
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <Paper>
          <MenuList>
            <MenuItem>Resource</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Paper>


        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >

          <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>

            <ResourceView />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
