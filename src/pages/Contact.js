import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 80px 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 50px;
  color: var(--primary-color);
  text-align: center;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    margin: 15px auto 0;
    background-color: var(--secondary-color);
  }
`;

const ContactCard = styled.div`
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 40px;
  height: 100%;
`;

const ContactHeading = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--primary-color);
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--light-bg);
  color: var(--primary-color);
  border-radius: 50%;
  margin-right: 20px;
  font-size: 1.2rem;
`;

const InfoDetails = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  
  p {
    margin: 0;
    color: var(--text-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  
  a {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--light-bg);
    color: var(--primary-color);
    border-radius: 50%;
    transition: var(--transition);
    font-size: 1.2rem;
    
    &:hover {
      background-color: var(--primary-color);
      color: white;
      transform: translateY(-3px);
    }
  }
`;

const StyledForm = styled(Form)`
  .form-label {
    font-weight: 500;
  }
  
  .form-control {
    border-radius: var(--border-radius);
    padding: 12px 15px;
    border: 1px solid var(--light-gray);
    
    &:focus {
      box-shadow: none;
      border-color: var(--primary-color);
    }
  }
  
  textarea.form-control {
    min-height: 150px;
  }
`;

const SubmitButton = styled(Button)`
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  padding: 12px 30px;
  font-weight: 600;
  border-radius: 30px;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--secondary-color);
    border-color: var(--secondary-color);
    transform: translateY(-3px);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    // Here you would normally send the form data to your server or a third-party service
    // For demonstration purposes, we'll just show a success message
    setValidated(true);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <ContactSection>
      <Container>
        <SectionTitle>Contact Me</SectionTitle>
        
        <Row>
          <Col lg={5} className="mb-4">
            <ContactCard>
              <ContactHeading>Get in Touch</ContactHeading>
              
              <ContactInfo>
                <IconWrapper>
                  <i className="fas fa-envelope"></i>
                </IconWrapper>
                <InfoDetails>
                  <h4>Email</h4>
                  <p>ryanguzimp@gmail.com</p>
                </InfoDetails>
              </ContactInfo>
              
              <ContactInfo>
                <IconWrapper>
                  <i className="fas fa-phone-alt"></i>
                </IconWrapper>
                <InfoDetails>
                  <h4>Phone</h4>
                  <p>+1 (514) 589-4949</p>
                </InfoDetails>
              </ContactInfo>
              
              <ContactInfo>
                <IconWrapper>
                  <i className="fas fa-map-marker-alt"></i>
                </IconWrapper>
                <InfoDetails>
                  <h4>Location</h4>
                  <p>Montreal, QC, Canada</p>
                </InfoDetails>
              </ContactInfo>
              
              <SocialLinks>
                <a href="https://github.com/ryanguzelian" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/ryanguzelian" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                {/* <a href="https://twitter.com/ryanguzelian" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a> */}
                {/* <a href="https://instagram.com/ryanguzelian" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a> */}
              </SocialLinks>
            </ContactCard>
          </Col>
          
          <Col lg={7}>
            <ContactCard>
              <ContactHeading>Send Me a Message</ContactHeading>
              
              {submitted && (
                <Alert variant="success" className="mb-4">
                  <i className="fas fa-check-circle mr-2"></i> Thank you for your message! I'll get back to you as soon as possible.
                </Alert>
              )}
              
              {error && (
                <Alert variant="danger" className="mb-4">
                  <i className="fas fa-exclamation-circle mr-2"></i> Something went wrong. Please try again later.
                </Alert>
              )}
              
              <StyledForm noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group controlId="formSubject" className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a subject.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group controlId="formMessage" className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a message.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <div className="text-end">
                  <SubmitButton type="submit">
                    <i className="fas fa-paper-plane me-2"></i> Send Message
                  </SubmitButton>
                </div>
              </StyledForm>
            </ContactCard>
          </Col>
        </Row>
      </Container>
    </ContactSection>
  );
};

export default Contact;
