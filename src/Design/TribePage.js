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
  padding: 20px;
  border-radius: 10px;
  position: relative;
  text-align: left;
  overflow-y: auto;
  max-height: 90vh;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const ModalImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
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
