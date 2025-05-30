import { useEffect, useState } from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import DownloadApp from "../../Sections/DownloadApp/DownloadApp";
import HospitalCard from "../../Components/HospitalCard/HospitalCard";
import cta from "../../assets/cta.png";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    try {
      const localBookings = localStorage.getItem("bookings");
      setBookings(localBookings ? JSON.parse(localBookings) : []);
    } catch (err) {
      console.error("Invalid data in localStorage for 'bookings'", err);
      setBookings([]); // fallback to empty array
    }
  }, []);

  useEffect(() => {
    setFilteredBookings(bookings);
  }, [bookings]);

  return (
    <>
      <Header />
      <Box sx={{ background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))" }}>
        {/* Header Section */}
        <Box
          mb="50px"
          pt={{ xs: 3, md: 1 }}
          sx={{
            position: "relative",
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
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
                <SearchBar list={bookings} filterList={setFilteredBookings} />
              </Box>
            </Stack>
          </Container>
        </Box>

        {/* Bookings Display Section */}
        <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
          <Stack alignItems="flex-start" direction={{ md: "row" }}>
            <Stack
              mb={{ xs: 4, md: 0 }}
              spacing={3}
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr="24px"
            >
              {filteredBookings.length > 0 ? (
                filteredBookings.map((hospital, index) => (
                  <HospitalCard
                    key={hospital["Hospital Name"] || index}
                    details={hospital}
                    booking={true}
                  />
                ))
              ) : (
                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                  No Bookings Found!
                </Typography>
              )}
            </Stack>

            {/* CTA Image */}
            <img src={cta} width={360} height="auto" alt="Call to Action" />
          </Stack>
        </Container>

        <DownloadApp/>
      </Box>
    </>
  );
};

export default MyBooking;
