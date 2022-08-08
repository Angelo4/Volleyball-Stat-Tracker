import ResponsiveAppBar from './components/ResponsiveAppBar';
import TrackGame from './features/TrackGame';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2558b3',
    },
    secondary: {
      main: '#ffe139',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveAppBar />
        <TrackGame />
      </ThemeProvider>
    </>
  );
}

export default App;
