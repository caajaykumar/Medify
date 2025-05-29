import { Container, Row, Col } from "react-bootstrap";

import mobile from '../../assets/mobile.jpg';
import playstore from '../../assets/playstore.png';
import apple from '../../assets/apple-logo.png';
import arrow from '../../assets/down-arr.png';
import SmsForm from "./SmsForm";

const DownloadApp = () => {
  return (
    <>
      <div style={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", paddingTop: '40px' }}>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <img src={mobile} alt="mobile" style={{ width: "100%", height: "auto" }} />
            </Col>

            <Col xs={12} md={6}>
              <div style={{ position: "relative", paddingLeft: "50px", marginBottom: "30px" }}>
                <h2 style={{ marginBottom: "16px" }}>
                  Download the <br />
                  <span style={{ color: "#0d6efd" }}>Medify </span>App
                </h2>

                <img
                  src={arrow}
                  alt="arrow"
                  style={{ width: "40px", position: "absolute", left: 0, top: "50px" }}
                />

                <SmsForm />

                <div className="d-flex flex-column flex-md-row gap-2 mt-3">
                  <button
                    style={{
                      backgroundColor: "#333",
                      color: "#fff",
                      padding: "12px",
                      borderRadius: "12px",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                  >
                    <img src={playstore} height={24} alt="playstore" />
                    Google Play
                  </button>
                  <button
                    style={{
                      backgroundColor: "#333",
                      color: "#fff",
                      padding: "12px",
                      borderRadius: "12px",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                  >
                    <img src={apple} height={24} alt="apple" />
                    App Store
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DownloadApp;
