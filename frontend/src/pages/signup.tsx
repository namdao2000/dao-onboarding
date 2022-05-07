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
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import { Link } from '@mui/material';

const steps = ['About', 'Choose your role', 'Onboarding call'];

const theme = createTheme();

const Signup = (): ReactElement => {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();

  const handleNext = (): void => {
    setActiveStep(activeStep + 1);
  };

  function getStepContent(step: number): ReactElement {
    switch (step) {
      case 0:
        return <About />;
      case 1:
        return <ChooseRoleForm handleNext={handleNext} />;
      case 2:
        return <OnboardingCall />;
      case 3:
        return (
          <div className="flex justify-center">
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Say hi to your community in discord 👋
            </Typography>
          </div>
        );
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          {activeStep >= 1 && (
            <div className="flex justify-end">
              <Link
                href="https://discord.gg/RXcGyWd"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                color="inherit"
                className="flex space-x-1 items-center"
                onClick={(): void => {
                  navigate(`${ROUTES.dashboard}`);
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 'light' }}>
                  Skip and join discord
                </Typography>
                <img
                  className="h-[1.5em]"
                  src="https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png"
                />
              </Link>
            </div>
          )}

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
            {getStepContent(activeStep)}
            {activeStep !== 1 && (
              <Box>
                {activeStep < 3 ? (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ display: 'block', mt: 3 }}
                    fullWidth
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={(): void => {
                      navigate(`${ROUTES.dashboard}`);
                    }}
                    sx={{ display: 'block', mt: 3 }}
                    fullWidth
                  >
                    Get in there!
                  </Button>
                )}
              </Box>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Signup;
