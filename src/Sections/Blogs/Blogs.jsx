import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import BlogCard from './BlogCard';

const Blogs = () => {
  return (
    <div className="py-5">
      <Container>
        <h6 className="text-primary fw-semibold text-center mb-2">
          Blog & News
        </h6>
        <h4 className="text-center fw-bold mb-4">
          Read Our Latest News
        </h4>

        <Row className="g-4">
          <Col xs={12} sm={6} md={4}>
            <BlogCard />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <BlogCard />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <BlogCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blogs;
