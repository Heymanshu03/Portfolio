import { Button, Stack, Typography } from '@mui/material';
import ResumeLink from './resumeLink.pdf';

export default function MainContent() {
  return (
    <Stack justifyContent="center" alignItems="center" spacing="2rem" sx={{ textAlign: 'center', my: 20 }}>
      <Typography variant="body1" sx={{ fontSize: '3rem' }}>
        👋👋 Hi. I&#39;m Himanshu Singh.
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '3rem' }}>
        Love developing functional components.
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: '50%' }}>
      I am an enthusiastic, adept, and dedicated software engineer,
       passionate about collaborating with developers and users to create high-quality software and design. 
       I focus on building comprehensive user interfaces while keeping business value in mind.
      </Typography>
      <Stack direction="row" spacing="2rem">
        <Button variant="outlined" onClick={() => window.open(ResumeLink, '_blank', 'noopener,noreferrer')}>
          Download Resume
        </Button>
        <Button variant="contained" onClick={(e) => {
          window.location.href = 'mailto:mohit.paudyal@gmail.com';
          e.preventDefault();
        }}>Email</Button>
      </Stack>
    </Stack>
  );
}
