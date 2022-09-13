import { Box, Typography } from "@mui/material";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <Box margin='5% 15%'>
      <Typography style={{ fontSize: '24px', fontWeight: 'bold' }}>Privacy Policy</Typography>
      <br />
      <Typography>Effective February 4, 2021</Typography>
      <br />
      <Box>
        <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>1. Information We Collect and Receive</Typography>
        <br />
        <Typography>This is information you actively give us while taking certain actions on our Site, such as creating an account, filling out your profile, and completing payment events.While using our Site, we may ask you to provide us with certain pieces of personally identifiable information that can be used to contact or identify you. Personally identifiable information ("personal information" or “personal data”) may include, but is not limited to, your name, email address, profile photo, and payment information.Through use of the Site, you may also provide us with data that is not personally identifiable (“non-identifying data”). This includes additional profile information, such as: your expertise, timezone, and language.</Typography>
      </Box>
      <br />
      <Box>
        <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>2. Use of Personal Information</Typography>
        <br />
        <Typography>We may disclose your personal information to third-party services who act as our service providers or advertising partners. For example, we may provide your email address to Sendgrid, our email and newsletter service provider, in order to send you notifications and other emails. We may also provide your personal information to Sift, a third-party service, in order to assist us in detecting and preventing fraudulent activity.</Typography>
      </Box>
      <br />
      <Box>
        <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>3. Updating and Deleting Your Information</Typography>
        <br />
        <Typography>If you wish to update your account or profile information, you can do so from your Account Settings and Profile page (accessed from the dropdown menu at the top right of your dashboard.)When you delete your account from Account Settings, we remove all personal data we have on record, including your name, email, photo, social profiles, IP, payment information, and payout information. This means all account deletions are permanent. We may retain some personal data for a period of time, as required by law, or if there are ongoing payment disputes. For example, we retain tax documentation for mentors due to legal obligations.</Typography>
      </Box>
    </Box>
  )
}