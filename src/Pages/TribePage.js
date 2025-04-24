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

const AtaTribesPage = () => {
  const [tribeName, setTribeName] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    // Retrieve the stored tribe name from local storage
    const storedTribeName = localStorage.getItem("selectedTribe");
    if (storedTribeName) {
      setTribeName(storedTribeName);

      // Fetch the background image from the API
      axios
        .post("https://vynceianoani.helioho.st/alampat/getTribeImage.php", { name: storedTribeName })
        .then((response) => {
          if (response.data && response.data.featured_image) {
            setBackgroundImage(`data:image/jpeg;base64,${response.data.featured_image}`);
          }
        })
        .catch((error) => {
          console.error("Error fetching tribe image:", error);
        });
    }
  }, []);

  return (
    <>
      <HeaderImage
        style={{
          backgroundImage: `url(${backgroundImage})`, // Dynamically set the background image
        }}
      >
        <Title>{tribeName || "ATA TRIBES"}</Title> {/* Display the stored name or default title */}
      </HeaderImage>
      <Container>
        <Subheading>BRIEF INTRODUCTION</Subheading>
        <Paragraph>
          Diyas is created to promote all kinds of arts created by our indigenous people and protect their rights as the owner of their creation.
        </Paragraph>
        <ArtworkSection>
          <ArtworkTitle>{tribeName} ARTWORKS</ArtworkTitle>
          <Artworks>
            <Artwork src="/path-to-artwork-image.jpg" alt="Artwork 1" />
            <Artwork src="/path-to-artwork-image.jpg" alt="Artwork 2" />
            <Artwork src="/path-to-artwork-image.jpg" alt="Artwork 3" />
            <Artwork src="/path-to-artwork-image.jpg" alt="Artwork 4" />
          </Artworks>
        </ArtworkSection>
      </Container>
    </>
  );
};

export default AtaTribesPage;