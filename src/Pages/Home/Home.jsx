import { Container, Box, Stack } from "@mui/material";
import Header from "../../Components/Header/Header";
import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import SearchHospital from "../../Components/SearchHostital/SearchHospital";

import ServicesIcon from "../../Components/ServicesIcon/ServicesIcon";




export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
   <Header/>
     <Container maxWidth="xl">
         <HeroSlider/>

       <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >


         <SearchHospital/>


        <ServicesIcon/>


         </Stack>
         
        </Container>


       
      </Box>

      {/* <Offers />

      <Specialization />

      <Specialists />

      <PatientCaring />

      <Blogs />

      <OurFamilies />

      <FAQs /> */}
    </Box>
  );
}
