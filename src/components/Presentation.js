import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 40px 20px;
  
  @media (max-width: 768px) {
    text-align: center;
    padding: 20px;
  }
`;

const Heading = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  font-weight: 700;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  span {
    color: var(--secondary-color);
  }
`;

const Subheading = styled.div`
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: var(--text-color);
  max-width: 600px;
  line-height: 1.8;
  margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 12px 30px;
  background-color: ${props => props.primary ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.primary ? 'white' : 'var(--primary-color)'};
  border: 2px solid var(--primary-color);
  border-radius: 30px;
  font-weight: 600;
  transition: var(--transition);
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.primary ? 'var(--secondary-color)' : 'var(--primary-color)'};
    border-color: ${props => props.primary ? 'var(--secondary-color)' : 'var(--primary-color)'};
    color: white;
    transform: translateY(-3px);
  }
`;

function Presentation({ title, subtitle, description, primaryBtnText, secondaryBtnText, primaryBtnAction, secondaryBtnAction }) {
  return (
    <Container>
      <Heading>
        {title ? (
          title
        ) : (
          <Typewriter
            options={{ cursor: "" }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome to My <span>Portfolio</span>")
                .start();
            }}
          />
        )}
      </Heading>
      
      <Subheading>
        {subtitle ? (
          subtitle
        ) : (
          <Typewriter
            options={{ cursor: "" }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2000)
                .typeString("Software Engineering Graduate & Developer")
                .start();
            }}
          />
        )}
      </Subheading>
      
      {description && <Description>{description}</Description>}
      
      {(primaryBtnText || secondaryBtnText) && (
        <ButtonWrapper>
          {primaryBtnText && (
            <Button primary onClick={primaryBtnAction}>
              {primaryBtnText}
            </Button>
          )}
          
          {secondaryBtnText && (
            <Button onClick={secondaryBtnAction}>
              {secondaryBtnText}
            </Button>
          )}
        </ButtonWrapper>
      )}
    </Container>
  );
}

export default Presentation;

export default Presentation;
