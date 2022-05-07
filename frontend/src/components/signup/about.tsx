import * as React from 'react';
import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';

export default function About(): ReactElement {
  return (
    <React.Fragment>
      <div className="flex justify-center">
        <Typography variant="h6" gutterBottom>
          About
        </Typography>
      </div>
      <div className="flex justify-start">
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          VISION
        </Typography>
      </div>
      <div className="px-2 py-2">
        <Typography variant="body1" sx={{ fontWeight: 'light' }}>
          To our members, being a fan isn&apos;t enough. The Krause House is a
          Decentralized Autonomous Organization (DAO) governed by the community,
          the fans, the basketball lovers and purists. The Krause House is a
          community of hoop fanatics that are just crazy enough to buy on NBA
          team.
        </Typography>
      </div>
      <div className="flex justify-start">
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          Important Links
        </Typography>
      </div>
      <div className="px-2 py-2">
        <Typography variant="body1" sx={{ fontWeight: 'light' }}>
          <button className="underline">Click here</button> to learn more about
          Krause House
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'light' }}>
          <button className="underline">Click here</button> for other resources
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'light' }}>
          <button className="underline">Click here</button> to see how you can
          contribute
        </Typography>
      </div>
    </React.Fragment>
  );
}
