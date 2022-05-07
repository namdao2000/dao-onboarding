import * as React from 'react';
import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';
import { FormControl, InputLabel, Link, MenuItem, Select } from '@mui/material';
import { ROUTES } from '../../utils/routes';
import { toast } from 'react-hot-toast';

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
      <div className="flex justify-end py-4">
        <button
          className="flex space-x-1 items-center"
          onClick={(): void => {
            toast.error('WIP 😛');
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'light' }}>
            Add to calendar
          </Typography>
          <img
            className="h-[1.5em]"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
          />
        </button>
      </div>
    </React.Fragment>
  );
}
