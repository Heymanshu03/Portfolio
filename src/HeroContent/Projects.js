import { Workspaces } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, CardMedia, Chip, Container, Stack, Typography } from '@mui/material';

export default function Projects() {
  const projects = [
    {
      id: 1,
      label: 'Himanshu Fitness',
      language: ['HTML','CSS'],
      imageUrl: './token.jpg',
      caption: 'Developed a landing page using HTML and CSS for a fitness venture ',
      link: 'https://github.com/Heymanshu03/Landing-page',
    },
    
  ];

  return (
    <Container maxWidth="xl" sx={{ my: '5rem' }}>
      <Stack direction="row" spacing="2rem" alignItems="center">
        <Workspaces />
        <Stack>
          <Typography variant="h3">Projects</Typography>
          <Typography variant="body1">Peek into my engineering side.</Typography>
        </Stack>
      </Stack>
      <Stack flexWrap="wrap" useFlexGap spacing="2rem" direction="row" sx={{ mt: '2rem' }}>
        {projects.map((v) => (
          <Card key={v.id} sx={{ width: '25rem' }}>
            <CardMedia sx={{ height: 140 }} image={v.imageUrl} title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {v.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {v.caption}
              </Typography>
              <Stack direction="row" spacing="0.2rem">
                {v.language.map((item) => (
                  <Chip key={v.label} label={item} />
                ))}
              </Stack>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => window.open(v.link, '_blank', 'noopener,noreferrer')}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
