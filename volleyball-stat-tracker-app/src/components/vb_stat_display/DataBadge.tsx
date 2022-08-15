import { Paper, Stack, Typography } from '@mui/material';
import theme from '../../utils/Theme';

type Props = { title: string; data: string | number };

const DataBadge = (props: Props) => {
  return (
    <Paper
      sx={{
        maxWidth: 200,
        minWidth: 200,
        minHeight: 200,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <Stack>
        <Typography
          variant="h5"
          color={theme.palette.text.secondary}
          gutterBottom
        >
          {props.title}
        </Typography>

        <Typography variant="h2">{props.data}</Typography>
      </Stack>
    </Paper>
  );
};

export default DataBadge;
