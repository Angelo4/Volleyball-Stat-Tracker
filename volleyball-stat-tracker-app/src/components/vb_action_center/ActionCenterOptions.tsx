import { MoreHoriz, Redo, Undo } from '@mui/icons-material';
import { Button, ButtonGroup, Tooltip } from '@mui/material';
import { useDispatch } from 'react-redux';
import { ActionCreators } from 'redux-undo';

const ActionCentreOptions = () => {
  const dispatch = useDispatch();

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
      <Button>
        <MoreHoriz />
      </Button>
    </ButtonGroup>
  );
};

export default ActionCentreOptions;
