import { Box, Stack, Typography } from "@mui/material";
import featured from '../../assets/blog.png'
import person from '../../assets/person.png'


const BlogCard = () => {
  return (
        <Box border="1px solid rgba(0,0,0,0.1)" borderRadius={2} overflow="hidden">
      <Box
        component="img"
        src={featured}
        alt="Featured Blog"
        width="100%"
        height="auto"
        sx={{ display: 'block' }}
      />
      <Box p={2}>
        <Typography color="#77829D" fontWeight={500} mb={1} fontSize={{ xs: 12, md: 16 }}>
          Medical | March 31, 2022
        </Typography>
        <Typography component="h3" color="#1B3C74" fontSize={{ xs: 14, md: 18 }} fontWeight={500} lineHeight={1.3} mb={2}>
          6 Tips To Protect Your Mental Health When You're Sick
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box
            component="img"
            src={person}
            alt="Author"
            width={32}
            height={32}
            borderRadius="50%"
          />
          <Typography color="#1B3C74" fontSize={{ xs: 12, md: 16 }}>
            Rebecca Lee
          </Typography>
        </Stack>
      </Box>
    </Box>
  )
}

export default BlogCard