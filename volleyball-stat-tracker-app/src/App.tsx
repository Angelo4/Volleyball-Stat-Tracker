import ResponsiveAppBar from './components/ResponsiveAppBar';
import TrackGame from './features/TrackGame';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './utils/Theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <TrackGame />
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
