import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  HeaderImage,
  Title,
  Subheading,
  Paragraph,
  ArtworkSection,
  ArtworkTitle,
  Artworks,
  Artwork,
  ArtworkCard,
  ArtworkTitleText,
  ModalBackground,
  ModalContainer,
  CloseButton,
  ModalImage,
  ModalTitle,
  ModalText,
  Divider,
  ModalContent,
  ModalDetails,
  ArtistName,
  ArtistLocation,
  AboutSection,
  AboutTitle,
  AboutDescription,
  NotForSaleTag,
  Section,
  SectionTitle,
  SectionText,
  DividerLine,
} from "../Design/TribePage"; // 👈 import the styles here

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
            <ModalContent>
              {/* Artist Section */}
              <ModalImage
                src={`data:image/jpeg;base64,${selectedArtwork.artist_picture}`}
                alt="Artist"
              />
              <Section>
                <SectionTitle>Artist Name:</SectionTitle>
                <SectionText>{selectedArtwork.artist_name}</SectionText>

                <SectionTitle>Location:</SectionTitle>
                <SectionText>
                  {selectedArtwork.artist_location || "Unknown"}
                </SectionText>

                <SectionTitle>About the Artist:</SectionTitle>
                <SectionText>{selectedArtwork.artist_description}</SectionText>
              </Section>

              {/* Divider */}
              <DividerLine />

              {/* Artwork Section */}
              <ModalImage
                src={`data:image/jpeg;base64,${selectedArtwork.artwork_picture}`}
                alt="Artwork"
              />
              <Section>
                <SectionTitle>Artwork Title:</SectionTitle>
                <SectionText>{selectedArtwork.artwork_title}</SectionText>

                <SectionTitle>About the Artwork:</SectionTitle>
                <SectionText>{selectedArtwork.artwork_description}</SectionText>
              </Section>

              {/* Not For Sale Tag */}
              <NotForSaleTag>NOT FOR SALE</NotForSaleTag>
            </ModalContent>
          )}
        </ModalContainer>
      </ModalBackground>
    </>
  );
};

export default AtaTribesPage;
