import React from 'react';
import Container from '@mui/material/Container';
import { Box, MenuItem, MenuList, Paper, } from '@mui/material';

import ResourceView from './pages/ResourceView';

const App: React.FC = () => {

  return (
    <Box sx={{ display: 'flex', height: "100%", overflow: "hidden" }}>
      <Paper sx={{
        backgroundColor: (theme) => theme.palette.grey[300],
        height: '100%',

      }}>
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
              ? theme.palette.grey[300]
              : theme.palette.grey[900],
          flexGrow: 1,
          overflow: 'hidden',
        }}
      >

        <Container maxWidth={false} sx={{ mt: 2, mb: 2 }}>

          <ResourceView />
        </Container>
      </Box>
    </Box>

  );
}

export default App;
