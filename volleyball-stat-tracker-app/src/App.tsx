import ResponsiveAppBar from './components/app_bar/ResponsiveAppBar';
import TrackGame from './features/TrackGame/TrackGame';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './utils/Theme';
import { Container } from '@mui/material';
import TrackTeam from './features/TrackTeam/TrackTeam';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  FacebookLoginClient,
  LoginResponse,
  LoginStatus,
} from '@greatsumini/react-facebook-login';
import { FbProfile, profileActions } from './redux/Profile';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    FacebookLoginClient.getLoginStatus((res: LoginResponse) => {
      if (res.status === LoginStatus.Connected) {
        FacebookLoginClient.getProfile(
          (res: any) => {
            console.log('Get profile response', res);
            const fbResponse: FbProfile = {
              id: res.id,
              fullName: res.name,
              email: res.email,
            };

            dispatch(profileActions.login(fbResponse));
          },
          { fields: 'name,email' }
        );
      }
    });
  });

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
