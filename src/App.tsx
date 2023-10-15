import React from 'react';

import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';

import ResourceView from './pages/ResourceView';
import { Box, Grid, MenuItem, MenuList, Paper, } from '@mui/material';

function App() {

  return (

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

  );
}

export default App;
