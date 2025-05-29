import { Container, Row, Col } from 'react-bootstrap';

import faqBanner from '../../assets/faqs-banner.jpg';
import CustomizedAccordions from "../../Components/Accordion/Accordion";



const FAQs = () => {
 const faqs = [
        {
            question: 'Why choose our medical for your family?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'Why we are different from others?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'Trusted & experience senior care & love',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'How to get appointment for emergency cases?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        }
    ]

  return (
   <div style={{ paddingTop: "40px", paddingBottom: "40px" }}>
            <Container fluid="xl">
                <p style={{ color: "#0d6efd", fontWeight: 600, textAlign: "center" }}>
          Get Your Answer
        </p>
        <h2 style={{ textAlign: "center", marginBottom: "16px" }}>
          Frequently Asked Questions
        </h2>
                <Row className="align-items-center" style={{ rowGap: "24px" }}>

                    <Col xs={12} md={6}>
                       <img
              src={faqBanner}
              alt="FAQ Banner"
              style={{ width: "100%", height: "auto" }}
            />
                    </Col>

                    <Col xs={12} md={6}>
                        <div style={{ maxWidth: "450px" }}>
                           
                            <CustomizedAccordions data={faqs}/>

                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
  )
}

export default FAQs