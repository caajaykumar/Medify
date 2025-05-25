import { Container, Box, Stack } from "@mui/material";
import Header from "../../Components/Header/Header";
import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import SearchHospital from "../../Components/SearchHostital/SearchHospital";

import ServicesIcon from "../../Components/ServicesIcon/ServicesIcon";
import Offers from "../../Components/offers/Offers";
import Specialization from "../../Components/Specialization/Specialization";
import DownloadApp from "../../Sections/DownloadApp/DownloadApp";
import FAQs from "../../Sections/FAQs/FAQs";
import Blogs from "../../Sections/Blogs/Blogs";
import OurFamilies from "../../Sections/OurFamilies/OurFamilies";
import Specialists from "../../Sections/Specialists/Specialists";
import PatientCaring from "../../Sections/PatientCaring/PatientCaring";




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

      <Offers/>

      <Specialization/>

      <Specialists/>
      <PatientCaring/>
   <Blogs/>
   <OurFamilies/>
    
      <FAQs/>
        <DownloadApp/>

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
