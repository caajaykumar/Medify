import { Container, Row, Col } from "react-bootstrap";

import banner from '../../assets/our-families-banner.png'

const OurFamilies = () => {
  return (
   <>
   <div style={{ paddingTop: "24px", background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container>
        <Row className="align-items-center" style={{ rowGap: "24px" }}>
          <Col xs={12} md={6}>
            <p style={{ fontWeight: 600, color: "#0d6efd" }}>
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </p>
            <h2>Our Families</h2>
            <p style={{ color: "#77829D", lineHeight: 1.8 }}>
              We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
            </p>
          </Col>

          <Col xs={12} md={6}>
            <img
              src={banner}
              alt="Our Families Banner"
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
   
   
   </>
  )
}

export default OurFamilies