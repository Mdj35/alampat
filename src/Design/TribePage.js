// AtaTribesPageStyles.js
import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  text-align: center;
  position: relative;
`;

export const HeaderImage = styled.div`
  background-size: cover;
  background-position: center;
  height: 300px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  color: white;
  position: absolute;
  top: 20px;
  left: 20px;
  text-align: left;
  z-index: 2;
`;

export const Subheading = styled.h2`
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  max-width: 600px;
  margin: 0 auto 20px;
  line-height: 1.5;
`;

export const ArtworkSection = styled.div`
  margin-top: 40px;
`;

export const ArtworkTitle = styled.h3`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Artworks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Artwork = styled.img`
  width: 150px;
  height: auto;
  cursor: pointer;
`;

export const ArtworkCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ArtworkTitleText = styled.p`
  font-size: 14px;
  margin-top: 10px;
  color: #333;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  width: 600px;
  max-width: 90%;
  height: 90vh; /* Fixed height */
  padding: 0; /* We'll handle padding inside */
  border-radius: 10px;
  position: relative;
  overflow: hidden; /* Hide overflow of outer container */
  display: flex;
  flex-direction: column;
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;

export const Section = styled.div`
  padding: 20px;
  border-left: 2px solid black;
  position: relative;
`;

export const DividerLine = styled.hr`
  border: none;
  border-top: 2px solid black;
  margin: 0;
`;
export const ModalDetails = styled.div`
  padding: 20px;
  border-left: 2px solid black;
  position: relative;
`;
export const ArtistName = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;
  text-transform: uppercase;
`;

export const ArtistLocation = styled.p`
  font-size: 13px;
  margin: 5px 0;
  color: #333;
`;
export const SectionTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0 5px 0;
  text-transform: uppercase;
`;

export const SectionText = styled.p`
  font-size: 13px;
  line-height: 1.4;
  margin: 5px 0;
`;
export const AboutSection = styled.div`
  margin-top: 10px;
`;

export const AboutTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const AboutDescription = styled.p`
  font-size: 13px;
  line-height: 1.4;
`;

export const NotForSaleTag = styled.div`
  background-color: #c7a644;
  color: black;
  padding: 5px 10px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 20px 20px 0 0;
  width: fit-content;
  margin: 20px auto 0;
  text-align: center;
`;
export const ModalTitle = styled.h2`
  margin-top: 10px;
  font-size: 20px;
`;

export const ModalText = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;

export const Divider = styled.hr`
  margin: 20px 0;
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%; /* 👈 make modal wider */
  max-width: 1200px;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 65vh; /* 👈 adjusted height to fit larger width */
  border-radius: 8px;
`;

export const ModalDescription = styled.p`
  margin-top: 15px;
  font-size: 1.2rem;
  text-align: center;
`;

export const ModalPageIndicator = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #666;
`;

export const ModalNavigationButton = styled.button`
  position: absolute;
  top: 50%;
  font-size: 3rem;
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  transform: translateY(-50%);
  padding: 10px;
  &:first-of-type {
    left: -60px;
  }
  &:last-of-type {
    right: -60px;
  }
`;
