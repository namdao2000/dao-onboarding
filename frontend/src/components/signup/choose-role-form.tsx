import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { ReactElement } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { SignupArgs, useSignup } from '../../services/user/use-signup';
import { toast } from 'react-hot-toast';
import Box from '@mui/material/Box';

export default function ChooseRoleForm({
  handleNext,
}: {
  handleNext: () => void;
}): ReactElement {
  const { handleSubmit, control } = useForm<{
    discordUsername: string;
    userRole: string;
  }>();

  const { signup } = useSignup();

  const onSubmit = async (data: SignupArgs): Promise<void> => {
    await signup({
      signupArgs: data,
      onSuccess: async () => {
        toast.success('Singup Successful');
        handleNext();
      },
    });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center">
          <Typography variant="h6" gutterBottom>
            Choose your role
          </Typography>
        </div>
        <Controller
          render={({ field }): ReactElement => (
            <TextField
              {...field}
              required
              id="discordUsername"
              label="Discord or Name"
              fullWidth
            />
          )}
          name="discordUsername"
          control={control}
        />
        <div className="pt-4">
          <Controller
            render={({ field }): ReactElement => (
              <FormControl fullWidth>
                <InputLabel id="select-label-1">I am a...</InputLabel>
                <Select labelId="select-label-1" label="I am a..." {...field}>
                  <MenuItem value="Developer">Developer</MenuItem>
                  <MenuItem value="Marketer">Marketer</MenuItem>
                  <MenuItem value="Biz Dev">Biz Dev</MenuItem>
                  <MenuItem value="Lurker">Lurker</MenuItem>
                  <MenuItem value="Designer">Designer</MenuItem>
                </Select>
              </FormControl>
            )}
            name="userRole"
            control={control}
          />
        </div>
        <Box>
          <Button
            variant="contained"
            sx={{ display: 'block', mt: 3 }}
            fullWidth
            type="submit"
          >
            Next
          </Button>
        </Box>
      </form>
    </React.Fragment>
  );
}
