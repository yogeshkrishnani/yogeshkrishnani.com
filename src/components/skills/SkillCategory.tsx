import { Box, Typography, Chip, Stack } from '@mui/material';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
        {skills.map(skill => (
          <Chip key={skill} label={skill} variant="outlined" color="primary" />
        ))}
      </Stack>
    </Box>
  );
};
