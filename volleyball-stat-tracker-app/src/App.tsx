import ResponsiveAppBar from './components/ResponsiveAppBar';
import TrackGame from './features/TrackGame/TrackGame';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './utils/Theme';
import { Container } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Container>
        <TrackGame />
      </Container>
    </ThemeProvider>
  );
}

export default App;
