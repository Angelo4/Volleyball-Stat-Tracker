import { MoreHoriz, Redo, Undo } from '@mui/icons-material';
import {
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  Snackbar,
  Tooltip,
} from '@mui/material';
import React from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { ActionCreators } from 'redux-undo';
import { statKeeperActions } from '../../redux/StatsKeeper';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ActionCentreOptions = () => {
  const dispatch = useDispatch();

  // Snackbars
  const [undoSnackbarOpen, setUndoSnackbarOpen] = React.useState(false);
  const [redoSnackbarOpen, setRedoSnackbarOpen] = React.useState(false);

  const handleUndoClick = () => {
    dispatch(ActionCreators.undo());
    setUndoSnackbarOpen(true);
  };

  const handleRedoClick = () => {
    dispatch(ActionCreators.redo());
    setRedoSnackbarOpen(true);
  };

  const handleUndoSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setUndoSnackbarOpen(false);
  };

  const handleRedoSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setRedoSnackbarOpen(false);
  };

  // Options Menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleClearClick = () => {
    dispatch(statKeeperActions.clearState());
    handleMenuClose();
  };

  return (
    <ButtonGroup>
      <Tooltip title="Undo">
        <Button onClick={handleUndoClick}>
          <Undo />
        </Button>
      </Tooltip>
      <Snackbar
        open={undoSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleUndoSnackbarClose}
      >
        <Alert
          onClose={handleUndoSnackbarClose}
          severity="info"
          sx={{ width: '100%' }}
        >
          Undo successful
        </Alert>
      </Snackbar>
      <Tooltip title="Redo">
        <Button onClick={handleRedoClick}>
          <Redo />
        </Button>
      </Tooltip>
      <Snackbar
        open={redoSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleRedoSnackbarClose}
      >
        <Alert
          onClose={handleRedoSnackbarClose}
          severity="info"
          sx={{ width: '100%' }}
        >
          Redo successful
        </Alert>
      </Snackbar>
      <Button
        id="basic-button"
        aria-controls={menuOpen ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHoriz />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClearClick}>Clear</MenuItem>
      </Menu>
    </ButtonGroup>
  );
};

export default ActionCentreOptions;
