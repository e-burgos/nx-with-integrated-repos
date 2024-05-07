import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import SideBar from '../SideBar';
import Header from '../Header';
import { Layout } from './styles';
import Footer from '../Footer';

export interface FrameProps {
  children?: React.ReactNode;
}

const Frame = ({ children }: FrameProps) => {
  return (
    <Layout>
      <CssBaseline />
      <Header />
      <SideBar />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          overflow: 'auto',
          marginTop: '64px',
        }}
      >
        {children}
      </Box>
      <Footer />
    </Layout>
  );
};

export default Frame;
