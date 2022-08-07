import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import {
  VbActionResult,
  VbActionResultType,
} from '../../models/VBActionResult';
import {
  incrementAttackError,
  incrementAttackPoint,
  incrementAttackSuccess,
} from '../../redux/stats-keeper';

type ActionButtonGroupProps = {
  title: string;
  pointEnabled?: boolean;
};

const ActionButtonGroup = (props: ActionButtonGroupProps) => {
  const dispatch = useDispatch();

  return (
    <Grid item xs={4}>
      <Typography variant="h5">{props.title}</Typography>
      <ButtonGroup>
        {!!props.pointEnabled && (
          <Button
            color="success"
            onClick={() => dispatch(incrementAttackPoint())}
          >
            Point
          </Button>
        )}
        <Button onClick={() => dispatch(incrementAttackSuccess())}>
          Success
        </Button>
        <Button color="error" onClick={() => dispatch(incrementAttackError())}>
          Error
        </Button>
      </ButtonGroup>
    </Grid>
  );
};

export default ActionButtonGroup;
