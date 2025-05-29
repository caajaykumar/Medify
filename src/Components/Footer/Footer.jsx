
import { Container, Row, Col } from 'react-bootstrap';

import styles from './footerstyle.module.css';

 import logo from "../../assets/logo.png";
 import fb from "../../assets/fb.png";
 import pinterest from "../../assets/pinterest.png";
import twitter from "../../assets/twitter.png";
import yt from "../../assets/yt.png";

// import FooterLink from "./FooterLink";

export default function Footer() {
  return (
<footer style={{ backgroundColor: '#16386E', color: '#fff', paddingTop: '40px' }}>
      <Container>
        <Row className="mb-4">
          <Col md={3}>
            <h4>
              <img
                src={logo}
                alt="logo"
                className="me-2"
              />
             
            </h4>
            <div className="d-flex gap-3 mt-3">
              <img src={fb}  className={styles.social_icon} />
              <img  src={pinterest} className={styles.social_icon} />
              <img src={twitter}  className={styles.social_icon} />
              <img src={yt}  className={styles.social_icon} />
            </div>
          </Col>

          <Col md={3}>
            <ul className="list-unstyled">
              <li>› About Us</li>
              <li>› Our Pricing</li>
              <li>› Our Gallery</li>
              <li>› Appointment</li>
              <li>› Privacy Policy</li>
            </ul>
          </Col>

          <Col md={3}>
            <ul className="list-unstyled">
              <li>› Orthology</li>
              <li>› Neurology</li>
              <li>› Dental Care</li>
              <li>› Opthalmology</li>
              <li>› Cardiology</li>
            </ul>
          </Col>

          <Col md={3}>
            <ul className="list-unstyled">
              <li>› About Us</li>
              <li>› Our Pricing</li>
              <li>› Our Gallery</li>
              <li>› Appointment</li>
              <li>› Privacy Policy</li>
            </ul>
          </Col>
        </Row>

        <hr style={{ borderTop: '1px solid #ccc' }} />

        <Row>
          <Col className="text-center py-3">
            <p className="mb-0">Copyright ©2025 Surya Nursing Home.com. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>

    // <Box bgcolor="primary.secondary" pb={3} pt={6}>
    //   <Container maxWidth="xl">
    //     <Grid container spacing={4}>
    //       <Grid item xs={12} md={4.5}>
    //         <Stack
    //           alignItems="flex-start"
    //           justifyContent="space-between"
    //           height={1}
    //         >
    //           <Box src={logo} height={36} alt="Medify" component="img" mb={2} />
    //           <Stack direction="row" spacing={1.5}>
    //             <Box component="img" src={fb} height={36} />
    //             <Box component="img" src={twitter} height={36} />
    //             <Box component="img" src={yt} height={36} />
    //             <Box component="img" src={pinterest} height={36} />
    //           </Stack>
    //         </Stack>
    //       </Grid>

    //       <Grid item xs={12} md={2.5}>
    //         <Stack spacing={2}>
    //           <FooterLink>About Us</FooterLink>
    //           <FooterLink>Our Pricing</FooterLink>
    //           <FooterLink>Our Gallery</FooterLink>
    //           <FooterLink>Appointment</FooterLink>
    //           <FooterLink>Privacy Policy</FooterLink>
    //         </Stack>
    //       </Grid>

    //       <Grid item xs={12} md={2.5}>
    //         <Stack spacing={2}>
    //           <FooterLink>Orthology</FooterLink>
    //           <FooterLink>Neurology</FooterLink>
    //           <FooterLink>Dental Care</FooterLink>
    //           <FooterLink>Opthalmology</FooterLink>
    //           <FooterLink>Cardiology</FooterLink>
    //         </Stack>
    //       </Grid>

    //       <Grid item xs={12} md={2.5}>
    //         <Stack spacing={2}>
    //           <FooterLink>About Us</FooterLink>
    //           <FooterLink>Our Pricing</FooterLink>
    //           <FooterLink>Our Gallery</FooterLink>
    //           <FooterLink>Appointment</FooterLink>
    //           <FooterLink>Privacy Policy</FooterLink>
    //         </Stack>
    //       </Grid>
    //     </Grid>

    //     <Typography
    //       fontWeight={300}
    //       color="#fff"
    //       fontSize={14}
    //       pt={3}
    //       mt={5}
    //       borderTop="1px solid rgba(255,255,255,0.1)"
    //     >
    //       Copyright ©2025 Surya Nursing Home.com. All Rights Reserved
    //     </Typography>
    //   </Container>
    // </Box>
  );
}
