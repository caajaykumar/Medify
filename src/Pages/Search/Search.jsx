import Header from "../../Components/Header/Header";
import { Container,  Box, Typography } from "@mui/material";
import SearchHospital from "../../Components/SearchHostital/SearchHospital";
import cta from '../../assets/cta.png';


const Search = () => {
  return (
    <>
<Header />

 <Box
        sx={{
          background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
          width: "100%",
          pl: 0,
        }}
      >

       <Box  sx={{
            position: "relative",
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}>

            <Container maxWidth="xl"
            sx={{
              background: "#fff",
              p: 3,
              borderRadius: 2,
              transform: "translatey(50px)",
              mb: "50px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}>


              <SearchHospital/>



            </Container>


       </Box>

       <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
  <Box
    sx={{
      mb: 3,
      display: "flex",
      alignItems: "center",
      gap: 3, // spacing between text and image
      flexWrap: { xs: "wrap", md: "nowrap" }, // responsive wrapping
    }}
  >
    <Typography
      variant="h3"
      bgcolor="#fff"
      p={3}
      borderRadius={2}
      sx={{ flex: 1 }}
    >
      Please select a state and city
    </Typography>

    <Box component="img"
      src={cta}
      alt="banner"
      sx={{ width: 360, height: "auto" }}
    />
  </Box>
</Container>






      </Box>


    </>
  )
}

export default Search