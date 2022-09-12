import ResponsiveAppBar from './components/ResponsiveAppBar';
import TrackGame from './features/TrackGame/TrackGame';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './utils/Theme';
import { Container } from '@mui/material';
import TrackTeam from './features/TrackTeam/TrackTeam';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Container maxWidth="xl" sx={{ paddingTop: 2 }}>
        <Routes>
          <Route path="/" element={<TrackGame />} />
          <Route path="/Team" element={<TrackTeam />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
