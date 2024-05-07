import { Box } from '@mui/material';
import { styled } from '@mui/material';

export const Layout = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'min-content 1fr',
  gridTemplateRows: '1fr min-content',
  minHeight: '100vh',
});
