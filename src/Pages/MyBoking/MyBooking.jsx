import Header from "../../Components/Header/Header"
import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchHospital from "../../Components/SearchHostital/SearchHospital";
import DownloadApp from "../../Sections/DownloadApp/DownloadApp"

import { Box, Typography, Container, Stack } from "@mui/material";


const MyBooking = () => {
  return (
    <>
    <Header/>

    
    <Box sx={{ background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))" }}>
   <Box  mb="50px"
          pt={{ xs: 3, md: 1 }}
          sx={{
            position: "relative",
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}>


            <Container maxWidth="xl" sx={{ px: { xs: 0, md: 5 } }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 0, md: 12 }}
              alignItems={{ xs: "center", md: "flex-end" }}
            >
              <Typography
                component="h1"
                pb={1}
                fontSize={{ xs: 32, md: 40 }}
                fontWeight={700}
                color="#fff"
              >
                My Bookings
              </Typography>
              <Box
                bgcolor="#fff"
                p={3}
                flexGrow={1}
                borderRadius={2}
                boxShadow="0 0 10px rgba(0,0,0,0.1)"
                sx={{ translate: "0 50px" }}
                width={{ xs: 1, md: "auto" }}
              >
                <SearchBar/>
              </Box>
            </Stack>
          </Container>


   </Box>
    

    </Box>

    <DownloadApp/>
        
    
    
    </>
  )
}

export default MyBooking