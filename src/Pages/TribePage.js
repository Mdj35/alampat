import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  text-align: center;
  position: relative;
`;

const HeaderImage = styled.div`
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

const Title = styled.h1`
  font-size: 36px;
  color: white;
  position: absolute;
  top: 20px;
  left: 20px;
  text-align: left;
  z-index: 2;
`;

const Subheading = styled.h2`
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0;
`;

const Paragraph = styled.p`
  font-size: 14px;
  max-width: 600px;
  margin: 0 auto 20px;
  line-height: 1.5;
`;

const ArtworkSection = styled.div`
  margin-top: 40px;
`;

const ArtworkTitle = styled.h3`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Artworks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Artwork = styled.img`
  width: 150px;
  height: auto;
  cursor: pointer;
`;

const ArtworkCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ArtworkTitleText = styled.p`
  font-size: 14px;
  margin-top: 10px;
  color: #333;
`;

// Modal styles
const ModalBackground = styled.div`
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

const ModalContainer = styled.div`
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

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ModalImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const ModalTitle = styled.h2`
  margin-top: 10px;
  font-size: 20px;
`;

const ModalText = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;

const Divider = styled.hr`
  margin: 20px 0;
`;

const AtaTribesPage = () => {
  const [tribeName, setTribeName] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [description, setDescription] = useState("");
  const [artworks, setArtworks] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  useEffect(() => {
    const storedTribeName = localStorage.getItem("selectedTribe");
    if (storedTribeName) {
      setTribeName(storedTribeName);

      axios
        .post("https://vynceianoani.helioho.st/alampat/getTribeImage.php", {
          name: storedTribeName,
        })
        .then((response) => {
          if (response.data) {
            if (response.data.featured_image) {
              setBackgroundImage(
                `data:image/jpeg;base64,${response.data.featured_image}`,
              );
            }
            if (response.data.description) {
              setDescription(response.data.description);
            }
          }
        })
        .catch((error) => {
          console.error("Error fetching tribe data:", error);
        });

      axios
        .post("https://vynceianoani.helioho.st/alampat/getArtworks.php", {
          tribeName: storedTribeName,
        })
        .then((response) => {
          if (Array.isArray(response.data)) {
            setArtworks(response.data);
          } else {
            setArtworks([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching artworks:", error);
          setArtworks([]);
        });
    }
  }, []);

  const handleArtworkClick = (artwork) => {
    axios
      .post("https://vynceianoani.helioho.st/alampat/getArtworkDetails.php", {
        id: artwork.id,
      })
      .then((response) => {
        if (response.data && !response.data.error) {
          setSelectedArtwork({
            artist_name: response.data.artist_name,
            artist_picture: response.data.artist_picture,
            artist_description: response.data.artist_description,
            artwork_title: response.data.artwork_title,
            artwork_picture: response.data.artwork_picture,
            artwork_description: response.data.artwork_description,
          });
          setIsModalOpen(true);
        } else {
          console.error(
            response.data.error || "Failed to load artwork details.",
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching artwork details:", error);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArtwork(null);
  };

  return (
    <>
      <HeaderImage style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Title>{tribeName || "ATA TRIBES"}</Title>
      </HeaderImage>
      <Container>
        <Subheading>BRIEF INTRODUCTION</Subheading>
        <Paragraph>
          {description || "No description available for this tribe."}
        </Paragraph>
        <ArtworkSection>
          <ArtworkTitle>{tribeName} ARTWORKS</ArtworkTitle>
          <Artworks>
            {artworks.length > 0 ? (
              artworks.map((artwork) => (
                <ArtworkCard
                  key={artwork.id}
                  onClick={() => handleArtworkClick(artwork)}
                >
                  <Artwork
                    src={`data:image/jpeg;base64,${artwork.picture}`}
                    alt={artwork.title}
                  />
                  <ArtworkTitleText>{artwork.title}</ArtworkTitleText>
                </ArtworkCard>
              ))
            ) : (
              <p>No artworks available for this tribe.</p>
            )}
          </Artworks>
        </ArtworkSection>
      </Container>

      {/* Modal */}
      <ModalBackground isOpen={isModalOpen} onClick={closeModal}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          {selectedArtwork && (
            <>
              <ModalImage
                src={`data:image/jpeg;base64,${selectedArtwork.artist_picture}`}
                alt="Artist"
              />
              <ModalTitle>{selectedArtwork.artist_name}</ModalTitle>
              <ModalText>
                <strong>About the Artist:</strong>{" "}
                {selectedArtwork.artist_description}
              </ModalText>
              <Divider />
              <ModalText>
                <strong>About the Artwork:</strong>{" "}
                {selectedArtwork.artwork_description}
              </ModalText>
            </>
          )}
        </ModalContainer>
      </ModalBackground>
    </>
  );
};

export default AtaTribesPage;
