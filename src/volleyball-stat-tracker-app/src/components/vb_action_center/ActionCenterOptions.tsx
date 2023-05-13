import { MoreHoriz, Redo, Undo } from '@mui/icons-material';
import { Button, ButtonGroup, Menu, MenuItem, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreators } from 'redux-undo';
import { statKeeperActions } from '../../redux/StatsKeeper';
import ActionSnackbar from './ActionSnackbar';

const ActionCentreOptions = () => {
  const dispatch = useDispatch();
  const [undoSnackbarOpen, setUndoSnackbarOpen] = useState<boolean>(false);
  const [redoSnackbarOpen, setRedoSnackbarOpen] = useState<boolean>(false);
  const [clearSnackbarOpen, setClearSnackbarOpen] = useState<boolean>(false);

  const handleUndoClick = () => {
    dispatch(ActionCreators.undo());
    setUndoSnackbarOpen(true);
  };

  const handleRedoClick = () => {
    dispatch(ActionCreators.redo());
    setRedoSnackbarOpen(true);
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
    setClearSnackbarOpen(true);
  };

  return (
    <ButtonGroup>
      <Tooltip title='Undo'>
        <Button onClick={handleUndoClick}>
          <Undo />
        </Button>
      </Tooltip>
      <Tooltip title='Redo'>
        <Button onClick={handleRedoClick}>
          <Redo />
        </Button>
      </Tooltip>
      <Button
        id='basic-button'
        aria-controls={menuOpen ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={menuOpen ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHoriz />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClearClick}>Clear</MenuItem>
      </Menu>
      <ActionSnackbar
        message='Undo successful'
        open={undoSnackbarOpen}
        setOpen={setUndoSnackbarOpen}
        severity='info'
      />
      <ActionSnackbar
        message='Redo successful'
        open={redoSnackbarOpen}
        setOpen={setRedoSnackbarOpen}
        severity='info'
      />
      <ActionSnackbar
        message='Clear successful'
        open={clearSnackbarOpen}
        setOpen={setClearSnackbarOpen}
        severity='info'
      />
    </ButtonGroup>
  );
};

export default ActionCentreOptions;
