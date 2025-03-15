import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Container, Typography, Stack, IconButton, Divider } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth={false}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: { xs: 2, md: 0 } }}>
            Designed & Built by Yogesh Krishnani
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              color="inherit"
              aria-label="LinkedIn"
              component="a"
              href="https://linkedin.com/in/yogeshkrishnani"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>

            <IconButton
              color="inherit"
              aria-label="GitHub"
              component="a"
              href="https://github.com/yogeshkrishnani"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>

            <IconButton
              color="inherit"
              aria-label="Email"
              component="a"
              href="mailto:yogesh.h.krishnani@gmail.com"
              size="small"
            >
              <EmailIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ fontSize: '0.8rem' }}
        >
          © {new Date().getFullYear()} Yogesh Krishnani. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};
