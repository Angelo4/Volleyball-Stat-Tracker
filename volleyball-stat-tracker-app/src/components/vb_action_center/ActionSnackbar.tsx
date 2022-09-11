import { AlertProps, Snackbar } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import MuiAlert, { AlertColor } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  message: string;
  severity?: AlertColor;
  open: boolean;
  setOpen: Dispatcher<boolean>;
};

const ActionSnackbar = (props: Props) => {
  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    props.setOpen(false);
  };

  return (
    <Snackbar
      open={props.open}
      autoHideDuration={3000}
      onClose={handleSnackbarClose}
    >
      <Alert
        onClose={handleSnackbarClose}
        severity={props.severity}
        sx={{ width: '100%' }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default ActionSnackbar;
