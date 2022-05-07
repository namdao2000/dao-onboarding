import * as React from 'react';
import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';

interface TitleProps {
  children?: React.ReactNode;
}

export default function Title(props: TitleProps): ReactElement {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}
