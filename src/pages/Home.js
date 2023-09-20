import { useEffect } from "react";
import Presentation from "../components/Presentation";
import Gif from "../images/ProgrammingGif.gif";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (min-width: 769px) {
    flex-direction: row;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0 20px;
  }
`;

const ProgrammerGifHolder = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    flex: none;
    padding-bottom: 20px;
  }
`;

const PresentationHolder = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    flex: none;
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  color: #999999;
`;

const FooterLink = styled.a`
  color: #999999;
`;

function Home() {
  useEffect(() => {
    // Set overflow: hidden when Home component mounts
    document.body.style.overflow = 'hidden';

    // Remove overflow: hidden when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <>
      <HomeContainer>
        <ProgrammerGifHolder>
          <img src={Gif} alt="Programming GIF" />
        </ProgrammerGifHolder>
        <PresentationHolder>
          <Presentation />
        </PresentationHolder>
        <Footer>
          {" "}
          Illustration by{" "}
          <FooterLink href="https://icons8.com/illustrations/author/TQQ1qAnr9rn5">
            Oleg Shcherba
          </FooterLink>{" "}
          from{" "}
          <FooterLink href="https://icons8.com/illustrations">Ouch!</FooterLink>
        </Footer>
      </HomeContainer>
    </>
  );
}

export default Home;
