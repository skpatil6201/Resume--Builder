import * as React from 'react';
import Logo from './Logos/Logo';
import Box from '@mui/material/Box';
import Switch from './Themes/Switch';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

function GettingStarted() {
  const navigate = useNavigate();

  const goToTemplate = () => {
    navigate('/Templete');
  };

  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Box className="pt-5" color="primary" sx={{ height: '100vh' }}>
        <Typography variant="h5" sx={{ display: 'flex' }} gutterBottom>
          Create a professional resume With Tejas
          <Typography mt="-3%" variant="h2">↴</Typography>
        </Typography>

        <Divider />
           <Logo 
            alt="Getting Started" 
            sx={{ width: '100%', 'height': 'auto' }} 
          /> 
        <Divider>
          <Switch />
        </Divider>

        <Grid container spacing={2}>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Typography className="font-bold mb-4 mt-10" variant="h4" gutterBottom>
              Welcome to Resume Builder
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} minHeight={160}>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Typography className="mb-8" variant="h6" gutterBottom>
            Create a professional resume in minutes.
            </Typography>
          </Grid>
        </Grid>

        <Divider>
          <Button 
            variant="contained"
            onClick={goToTemplate}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mb-10" 
          >
            Get Started
          </Button>
        </Divider>
      </Box>
    </Container>
  );
};

export default GettingStarted;