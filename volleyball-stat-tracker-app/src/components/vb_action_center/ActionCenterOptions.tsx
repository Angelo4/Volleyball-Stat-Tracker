import { MoreHoriz, Redo, Undo } from '@mui/icons-material';
import { Button, ButtonGroup, Menu, MenuItem, Tooltip } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreators } from 'redux-undo';
import { statKeeperActions } from '../../redux/StatsKeeper';

const ActionCentreOptions = () => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClearClick = () => {
    dispatch(statKeeperActions.clearState());
    handleClose();
  };

  return (
    <ButtonGroup>
      <Tooltip title="Undo">
        <Button
          onClick={() => {
            dispatch(ActionCreators.undo());
          }}
        >
          <Undo />
        </Button>
      </Tooltip>
      <Tooltip title="Redo">
        <Button
          onClick={() => {
            dispatch(ActionCreators.redo());
          }}
        >
          <Redo />
        </Button>
      </Tooltip>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHoriz />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
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
