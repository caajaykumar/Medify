import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ServiceIconCard from '../ServicesIcon/ServiceIconCard';
import icon1 from '../../assets/Drugstore.png';
import icon2 from '../../assets/primary-care.png';
import icon3 from '../../assets/cardiology.png';
import icon4 from '../../assets/mri.png';
import icon5 from '../../assets/blood-test.png';
import icon6 from '../../assets/piscologist.png';
import icon7 from '../../assets/X-Ray.png';

const Specialization = () => {
  const data = [
    { icon: icon1, title: 'Dentistry' },
    { icon: icon2, title: 'Primary Care' },
    { icon: icon3, title: 'Cardiology' },
    { icon: icon4, title: 'MRI Resonance' },
    { icon: icon5, title: 'Blood Test' },
    { icon: icon6, title: 'Piscologist' },
    { icon: icon1, title: 'Laboratory' },
    { icon: icon7, title: 'X-Ray' },
  ];

  return (
    <div className="py-5" style={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
      <Container className="text-center">
        <h2 className="mb-4">Find by specialisation</h2>

        <div className="mx-auto" style={{ maxWidth: '1200px' }}>
          <Row className="g-3 mb-4 justify-content-center">
            {data.map((item, index) => (
              <Col key={`${item.title}-${index}`} xs={6} md={3}>
                <ServiceIconCard
                  img={item.icon}
                  title={item.title}
                  bgColor="#FFFFFF"
                  shadow={true}
                />
              </Col>
            ))}
          </Row>
        </div>

        <Button variant="primary" size="lg">
          View All
        </Button>
      </Container>
    </div>
  );
};

export default Specialization;
