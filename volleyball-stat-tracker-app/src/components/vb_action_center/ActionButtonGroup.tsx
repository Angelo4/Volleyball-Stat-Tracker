import { Button, ButtonGroup, Grid, Typography } from '@mui/material';

type ActionButtonGroupProps = {
  title: string;
  pointEnabled?: boolean;
  handlePointClick?: () => { payload: undefined; type: string };
  handleSuccessClick: () => void;
  handleErrorClick: () => void;
};

const ActionButtonGroup = (props: ActionButtonGroupProps) => {
  return (
    <Grid item xs={4}>
      <Typography variant="h5">{props.title}</Typography>
      <ButtonGroup>
        <Button color="error" onClick={props.handleErrorClick}>
          Error
        </Button>
        <Button onClick={props.handleSuccessClick}>Success</Button>
        {!!props.pointEnabled && (
          <Button color="success" onClick={props.handlePointClick}>
            Point
          </Button>
        )}
      </ButtonGroup>
    </Grid>
  );
};

export default ActionButtonGroup;
