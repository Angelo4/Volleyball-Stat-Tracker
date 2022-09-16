import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Divider } from '@mui/material';
import Login from '../../features/Login/Login';
import {
  FacebookLoginClient,
  LoginResponse,
  LoginStatus,
} from '@greatsumini/react-facebook-login';
import { useEffect } from 'react';
import { FbProfile, profileActions } from '../../redux/Profile';
import { useDispatch } from 'react-redux';

type Props = {
  anchorElUser: HTMLElement | null;
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
  isLoggedIn: boolean;
  name?: string;
};

const AppProfileMenu = (props: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    FacebookLoginClient.getLoginStatus((res: LoginResponse) => {
      if (res.status === LoginStatus.Connected) {
        FacebookLoginClient.getProfile(
          (res: unknown) => {
            console.log('Get profile response', res);

            const isFbProfile = (value: unknown): value is FbProfile =>
              !!value &&
              typeof value === 'object' &&
              'name' in value &&
              typeof (value as FbProfile).name === 'string';

            console.log('isFbProfile', isFbProfile);

            const fbResponse: FbProfile = {
              id: 123,
              name: 'Angelo',
              email: 'angeloalcantara4@gmail.com',
            };

            dispatch(profileActions.login(fbResponse));
          },
          { fields: 'name,email,last_name' }
        );
      }
    });
  });

  return (
    <Box
      sx={{
        flexGrow: 0,
      }}
    >
      <Tooltip title='Open settings'>
        <IconButton
          onClick={props.handleOpenUserMenu}
          sx={{
            p: 0,
          }}
        >
          <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{
          mt: '45px',
        }}
        id='menu-appbar'
        anchorEl={props.anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(props.anchorElUser)}
        onClose={props.handleCloseUserMenu}
      >
        <MenuItem
          key={'about'}
          onClick={props.handleCloseUserMenu}
          sx={{
            justifyContent: 'center',
          }}
        >
          <Typography>Volleyball Definitions</Typography>
        </MenuItem>
        <MenuItem
          key={'about'}
          onClick={props.handleCloseUserMenu}
          sx={{
            justifyContent: 'center',
          }}
        >
          <Typography>About</Typography>
        </MenuItem>
        <Divider />
        <Box
          sx={{
            paddingLeft: 4,
            paddingRight: 4,
          }}
        >
          {props.isLoggedIn ? (
            <Typography>Welcome {props.name}</Typography>
          ) : (
            <Login />
          )}
        </Box>
      </Menu>
    </Box>
  );
};

export default AppProfileMenu;
