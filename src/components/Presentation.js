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
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Line1 = styled.div`
  font-size: 40px;
  color: #45c47e;
  font-weight: bold;
`;

const Line2 = styled.div`
  font-size: 18px;
  color: #45c47e;
`;

function Presentation() {
  return (
    <Container>
      <Line1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("I am Ryan Guzelian").start();
          }}
        />
      </Line1>
      <Line2>
        <Typewriter
          options={{
            cursor: "", // Hide the cursor
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(4000)
              .typeString("Software Engineering Student")
              .start();
          }}
        />
      </Line2>
    </Container>
  );
}

export default Presentation;
