// Modal.js
import styled from "styled-components";
import headerLogo from "./logo2.png"; // <-- import your ALAMPAT header image

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 2rem;
  width: 500px;
  max-width: 90%;
  border: 2px solid black; /* <-- add this line */
  border-radius: 10px;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const HeaderImage = styled.img`
  width: 200px; /* adjust size as needed */
  margin-bottom: 1rem;
`;

const Modal = ({ onClose }) => {
  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <HeaderImage src={headerLogo} alt="Alampat Logo" />
        <p>
          Alampat is a Bisaya word which means “art” and is written using the
          Baybayin alphabet. This website showcases the alampat of our
          indigenous people and highlights their cultural significance as well
          as the tribes who owned the traditional crafts.
        </p>
        <p>
          The Alampat website is designed to be a platform that promotes and
          protects indigenous art by giving people and users a knowledge and
          experience of their artworks and ensuring that the intellectual
          property rights of indigenous artists are respected and protected.
          Alampat aims to provide a unique and engaging experience for art
          enthusiasts, collectors, and supporters.
        </p>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
