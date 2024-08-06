import { AutoAwesome } from '@mui/icons-material';
import { Avatar, Button, Stack, Typography } from '@mui/material';

export default function BodyContent() {
  return (
    <Stack justifyContent="center" alignItems="center" spacing="2rem" sx={{ textAlign: 'center', my: 20 }}>
      <Stack sx={{ py: '1rem', flexDirection: { sm: 'column', lg: 'row' }, gap: { sm: '1rem', lg: '10rem' } }}>
        <Stack justifyContent="center" alignItems="center">
          <Avatar sx={{ width: '20rem', height: '20rem' }} alt="" src="/himanshu-profile.jpg" />
        </Stack>
        <Stack sx={{ px: '1rem' }}>
          <Typography variant="body1" maxWidth="40rem" gutterBottom>
           Hello! I&#39;m Himanshu Singh, a passionate and driven student currently pursuing a Bachelor of Science in Information Technology.
            With a strong foundation in web development, I specialize in HTML, CSS, and Node.js.
             My journey in IT has been fueled by a love for creating interactive and user-friendly web experiences. 
             I am eager to continue learning and growing in this ever-evolving field, and I&#39;m excited to showcase my projects and skills here. Let&#39;s build something amazing together!
          </Typography>
          <Stack justifyContent="center" alignItems="center" spacing="2rem">
            <Stack alignItems="center" sx={{ py: 1, flexDirection: 'row', gap: '1rem'}}>
              <AutoAwesome />
              <Typography variant="h3">
                Top Skills
              </Typography>
            </Stack>
            <Stack direction="row" flexWrap="wrap" useFlexGap spacing="1rem">
              {['HTML', 'CSS', 'Node.js', 'SQL', 'C++', 'Date Structure', ].map((v) => (
                <Button disableRipple disableFocusRipple disableTouchRipple variant="outlined" key={v}>
                  {v}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
