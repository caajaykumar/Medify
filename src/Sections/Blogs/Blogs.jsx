import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
   <Box py={6}>
      <Container>
        <Typography color="primary.main" fontWeight={600} textAlign="center" gutterBottom>
          Blog & News
        </Typography>
        <Typography textAlign="center" variant="h4" fontWeight={700} mb={4}>
          Read Our Latest News
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Blogs