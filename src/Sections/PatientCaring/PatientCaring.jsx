import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import banner from '../../assets/patientcaring.png';
import tick from '../../assets/tick-blue.png';

const PatientCaring = () => {
  return (
    <Box py={6} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
      <Container>
        <Row className="align-items-center g-4">
          <Col xs={12} md={6}>
            <Box
              component='img'
              src={banner}
              width={1}
            />
          </Col>

          <Col xs={12} md={6}>
            <Typography fontWeight={600} color="primary.main">
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </Typography>
            <Typography variant="h2" mb={1}>
              Patient <Box component='span' color='primary.main'>Caring</Box>
            </Typography>
            <Typography color='#77829D' lineHeight={1.8}>
              Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
            </Typography>

            <List sx={{ fontSize: { xs: 12, md: 18 } }}>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component='img' src={tick} height={22} width={22} />
                </ListItemIcon>
                <ListItemText
                  primary='Stay Updated About Your Health'
                  primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component='img' src={tick} height={22} width={22} />
                </ListItemIcon>
                <ListItemText
                  primary='Check Your Results Online'
                  primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component='img' src={tick} height={22} width={22} />
                </ListItemIcon>
                <ListItemText
                  primary='Manage Your Appointments'
                  primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                />
              </ListItem>
            </List>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default PatientCaring;
