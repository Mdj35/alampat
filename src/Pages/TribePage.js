import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

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

  /* Add overlay using ::before */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
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


const AtaTribesPage = () => {
  const [tribeName, setTribeName] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [description, setDescription] = useState("");
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    // Retrieve the stored tribe name from local storage
    const storedTribeName = localStorage.getItem("selectedTribe");
    if (storedTribeName) {
      setTribeName(storedTribeName);

      // Fetch the background image and description from the API
      axios
        .post("https://vynceianoani.helioho.st/alampat/getTribeImage.php", { name: storedTribeName })
        .then((response) => {
          if (response.data) {
            if (response.data.featured_image) {
              setBackgroundImage(`data:image/jpeg;base64,${response.data.featured_image}`);
            }
            if (response.data.description) {
              setDescription(response.data.description);
            }
          }
        })
        .catch((error) => {
          console.error("Error fetching tribe data:", error);
        });

      // Fetch artworks for the tribe
      axios
        .post("https://vynceianoani.helioho.st/alampat/getArtworks.php", { tribeName: storedTribeName })
        .then((response) => {
          if (Array.isArray(response.data)) {
            setArtworks(response.data);
          } else {
            setArtworks([]); // Set to an empty array if the response is not an array
          }
        })
        .catch((error) => {
          console.error("Error fetching artworks:", error);
          setArtworks([]); // Set to an empty array in case of an error
        });
    }
  }, []);

  
  return (
    <>
      <HeaderImage
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Title>{tribeName || "ATA TRIBES"}</Title>
      </HeaderImage>
      <Container>
        <Subheading>BRIEF INTRODUCTION</Subheading>
        <Paragraph>{description || "No description available for this tribe."}</Paragraph>
        <ArtworkSection>
          <ArtworkTitle>{tribeName} ARTWORKS</ArtworkTitle>
          <Artworks>
            {artworks.length > 0 ? (
              artworks.map((artwork) => (
                <ArtworkCard key={artwork.id}>
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
    </>
  );
};
export default AtaTribesPage;