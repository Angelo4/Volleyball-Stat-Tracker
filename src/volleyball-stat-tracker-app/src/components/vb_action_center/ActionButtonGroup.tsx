import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import ActionSnackbar from './ActionSnackbar';

type ActionButtonGroupProps = {
  title: string;
  pointEnabled?: boolean;
  handlePointClick?: () => { payload: undefined; type: string };
  handleSuccessClick: () => void;
  handleErrorClick: () => void;
};

const ActionButtonGroup = (props: ActionButtonGroupProps) => {
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState<boolean>(false);
  const [successSnackbarOpen, setSuccessSnackbarOpen] =
    useState<boolean>(false);
  const [pointSnackbarOpen, setPointSnackbarOpen] = useState<boolean>(false);

  const onErrorClick = () => {
    props.handleErrorClick();
    setErrorSnackbarOpen(true);
  };

  const onSuccessClick = () => {
    props.handleSuccessClick();
    setSuccessSnackbarOpen(true);
  };

  const onPointClick = () => {
    if (props.handlePointClick) {
      props.handlePointClick();
      setPointSnackbarOpen(true);
    }
  };

  return (
    <>
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
          <Typography variant='h5' align='center'>
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ButtonGroup variant='outlined' fullWidth>
            <Button color='error' onClick={onErrorClick} fullWidth>
              Error
            </Button>
            <Button onClick={onSuccessClick} fullWidth>
              Success
            </Button>
            {!!props.pointEnabled && (
              <Button color='success' onClick={onPointClick} fullWidth>
                Point
              </Button>
            )}
          </ButtonGroup>
        </Grid>
      </Grid>
      <ActionSnackbar
        message='Error added'
        severity='error'
        open={errorSnackbarOpen}
        setOpen={setErrorSnackbarOpen}
      />
      <ActionSnackbar
        message='Attempt successful'
        severity='info'
        open={successSnackbarOpen}
        setOpen={setSuccessSnackbarOpen}
      />
      <ActionSnackbar
        message='Point scored!'
        severity='success'
        open={pointSnackbarOpen}
        setOpen={setPointSnackbarOpen}
      />
    </>
  );
};

export default ActionButtonGroup;
