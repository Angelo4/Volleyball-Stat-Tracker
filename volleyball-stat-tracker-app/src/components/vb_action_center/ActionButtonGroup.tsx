import { Button, ButtonGroup, Grid, Stack, Typography } from '@mui/material';

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
      item
      xs={12}
      sm={6}
      md={4}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <Grid container spacing={1}>
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
              <Button
                color="success"
                onClick={props.handlePointClick}
                fullWidth
              >
                Point
              </Button>
            )}
          </ButtonGroup>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ActionButtonGroup;
