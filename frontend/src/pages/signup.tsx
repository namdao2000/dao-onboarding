import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactElement } from 'react';
import ChooseRoleForm from '../components/signup/choose-role-form';
import About from '../components/signup/about';
import OnboardingCall from '../components/signup/onboarding-call';

const steps = ['About', 'Choose your role', 'Onboarding call'];

function getStepContent(step: number): ReactElement {
  switch (step) {
    case 0:
      return <About />;
    case 1:
      return <ChooseRoleForm />;
    case 2:
      return <OnboardingCall />;
    case 3:
      return <>Hello Discord Community</>;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

const Signup = (): ReactElement => {
  // const { signup, loading } = useSignup();
  // const navigate = useNavigate();
  //
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   control,
  // } = useForm<{
  //   first_name: string;
  //   last_name: string;
  //   username: string;
  //   password: string;
  // }>();
  //
  // const onSubmit = useMemo(
  //   () =>
  //     handleSubmit(async (signupArgs: SignupArgs) => {
  //       await signup({
  //         signupArgs: signupArgs,
  //         onSuccess: async () => {
  //           toast.success('Singup Successful');
  //           navigate(`${ROUTES.dashboard}`, { replace: true });
  //         },
  //       });
  //     }),
  //   [handleSubmit, signup],
  // );

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (): void => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Welcome!
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 3 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <div className="flex justify-center">
                <Typography variant="h5" gutterBottom>
                  Say hi to your community in discord 👋
                </Typography>
              </div>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ display: 'block', mt: 3 }}
                    fullWidth
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
                      sx={{ display: 'block', mt: 2 }}
                      fullWidth
                    >
                      Back
                    </Button>
                  )}
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Signup;
