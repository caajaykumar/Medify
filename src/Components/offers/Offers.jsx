import { Box, Container } from "@mui/material";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';

import offer1 from '../../assets/offer1.png';
import offer2 from '../../assets/offer2.png';

const Offers = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#fff', py: 4 }}>
      <Container maxWidth="xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}

           style={{ paddingBottom: '40px' }}
        >
          {[offer1, offer2, offer1, offer2, offer1].map((img, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  p: 1.5, // padding between slides
                }}
              >
                <Box
                  component="img"
                  src={img}
                  alt={`Offer ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 3,
                    boxShadow: 3,
                    display: 'block',
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Offers;
