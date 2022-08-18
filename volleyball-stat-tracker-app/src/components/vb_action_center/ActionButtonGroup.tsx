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
    <Grid
      container
      spacing={2}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          {props.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ButtonGroup variant="outlined" fullWidth>
          <Button color="error" onClick={props.handleErrorClick} fullWidth>
            Error
          </Button>
          <Button onClick={props.handleSuccessClick} fullWidth>
            Success
          </Button>
          {!!props.pointEnabled && (
            <Button color="success" onClick={props.handlePointClick} fullWidth>
              Point
            </Button>
          )}
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default ActionButtonGroup;
