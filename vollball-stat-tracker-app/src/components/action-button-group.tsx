import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { useReducer } from 'react';
import { VbActionResult, VbActionResultType } from '../models/VBActionResult';

type ActionButtonGroupProps = {
  title: string;
  pointEnabled?: boolean;
};

const initialState: VbActionResult = {
  point: 0,
  success: 0,
  error: 0,
};

function reducer(state: typeof initialState, type: VbActionResultType) {
  switch (type) {
    case VbActionResultType.Point:
      return {
        ...state,
        point: !!state.point ? state.point + 1 : 1,
      };
    case VbActionResultType.Success:
      return {
        ...state,
        success: state.success + 1,
      };
    case VbActionResultType.Error:
      return {
        ...state,
        error: state.error + 1,
      };
    default:
      throw new Error();
  }
}

const ActionButtonGroup = (props: ActionButtonGroupProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const resultPoint = () => {
    dispatch(VbActionResultType.Point);
    console.log(state);
  };

  const resultSuccess = () => {
    dispatch(VbActionResultType.Success);
    console.log(state);
  };

  const resultError = () => {
    dispatch(VbActionResultType.Error);
    console.log(state);
  };

  return (
    <Grid item xs={4}>
      <Typography variant="h5">{props.title}</Typography>
      <ButtonGroup>
        {!!props.pointEnabled && (
          <Button color="success" onClick={resultPoint}>
            Point
          </Button>
        )}
        <Button onClick={resultSuccess}>Success</Button>
        <Button color="error" onClick={resultError}>
          Error
        </Button>
      </ButtonGroup>
    </Grid>
  );
};

export default ActionButtonGroup;
