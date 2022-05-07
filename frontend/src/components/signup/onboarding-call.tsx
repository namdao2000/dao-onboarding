import * as React from 'react';
import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function OnboardingCall(): ReactElement {
  return (
    <React.Fragment>
      <div className="flex justify-center">
        <Typography variant="h6" gutterBottom>
          Attend an onboarding call
        </Typography>
      </div>
      <FormControl fullWidth>
        <InputLabel id="select-label-2">
          Attend an upcoming onboarding call
        </InputLabel>
        <Select
          labelId="select-label-2"
          label="Attend an upcoming onboarding call"
        >
          <MenuItem value="Developer">Thursday, November 4 2021</MenuItem>
          <MenuItem value="Marketer">Thursday, November 11 2021</MenuItem>
          <MenuItem value="Biz Dev">Thursday, November 18 2021</MenuItem>
          <MenuItem value="Lurker">Thursday, November 25 2021</MenuItem>
        </Select>
      </FormControl>
    </React.Fragment>
  );
}
