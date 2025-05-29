import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';

import img1 from '../../assets/lesley.png';
import img2 from '../../assets/ahmad.png';
import img3 from '../../assets/heena.png';
import img4 from '../../assets/ankur.png';
import img5 from '../../assets/ahmad-stevens.png';

import SpecialistCard from './SpecialistCard';

const Specialists = () => {
  const specialist_data = [
    { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
    { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
    { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
    { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
    { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' },
    { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
    { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
    { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
    { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
    { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' }
  ];

  return (
    <div className="py-4" id="find-doctors">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center mb-3 px-2">Our Medical Specialist</h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                767: {
                  slidesPerView: 4,
                },
              }}
              style={{ paddingBottom: '40px' }}
            >
              {specialist_data.map((doc, index) => (
                <SwiperSlide key={index}>
                  <SpecialistCard
                    img={doc.img}
                    title={doc.title}
                    designation={doc.designation}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Specialists;
