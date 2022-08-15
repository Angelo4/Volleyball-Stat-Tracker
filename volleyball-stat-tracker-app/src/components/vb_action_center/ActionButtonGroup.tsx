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
      <Stack>
        <Typography variant="h5" align="center">
          {props.title}
        </Typography>
        <ButtonGroup variant="outlined">
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
      </Stack>
    </Grid>
  );
};

export default ActionButtonGroup;
