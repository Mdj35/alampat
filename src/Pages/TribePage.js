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
  ModalOverlay,
  ModalContent,
  ModalImage,
  ModalDescription,
  ModalNavigationButton,
  ModalPageIndicator,
} from "../Design/TribePage"; // 👈 make sure these new styles are created

const AtaTribesPage = () => {
  const [tribeName, setTribeName] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [description, setDescription] = useState("");
  const [artworks, setArtworks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextArtwork = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === artworks.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevArtwork = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? artworks.length - 1 : prevIndex - 1,
    );
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
              artworks.map((artwork, index) => (
                <ArtworkCard key={artwork.id} onClick={() => openModal(index)}>
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

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalImage
              src={`data:image/jpeg;base64,${artworks[currentIndex].picture}`}
              alt={artworks[currentIndex].title}
            />
            <ModalDescription>
              {artworks[currentIndex].description ||
                artworks[currentIndex].title}
            </ModalDescription>

            {/* 👇 New page indicator */}
            <ModalPageIndicator>
              {currentIndex + 1} of {artworks.length}
            </ModalPageIndicator>

            <ModalNavigationButton onClick={prevArtwork}>
              ‹
            </ModalNavigationButton>
            <ModalNavigationButton onClick={nextArtwork}>
              ›
            </ModalNavigationButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default AtaTribesPage;
