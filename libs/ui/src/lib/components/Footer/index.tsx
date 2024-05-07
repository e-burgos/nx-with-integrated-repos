import { Box, Link, Typography } from '@mui/material';

function Copyright() {
  return (
    <Typography
      sx={{ mt: 4 }}
      variant="body2"
      color="text.secondary"
      align="center"
    >
      {'Copyright © '}
      <Link color="inherit" href="https://support@membranelabs.com/" />{' '}
      {new Date().getFullYear()}
      {' Membrane. All Rights Reserved.'}
    </Typography>
  );
}

function Support() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Need help? '}
      <Link color="inherit" href="https://support@membranelabs.com/">
        support@membranelabs.com
      </Link>
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      sx={{
        padding: '32px 60px',
        borderTop: '1px solid rgba(0,0,0,0.12)',
        gridColumn: '2 / 3',
        bottom: '0',
        width: '-webkit-fill-available',
      }}
    >
      <Copyright />
      <Support />
    </Box>
  );
};

export default Footer;
