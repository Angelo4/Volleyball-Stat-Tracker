import theme from './utils/Theme';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { ResponsiveAppBar } from './components/app_bar';
import TrackGame from './features/track_game/TrackGame';
import TrackTeam from './features/track_team/TrackTeam';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Container maxWidth='xl' sx={{ paddingTop: 2 }}>
        <Routes>
          <Route path='/' element={<TrackGame />} />
          <Route path='/Team' element={<TrackTeam />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
