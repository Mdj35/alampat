import styled from "styled-components";

import { FaBars, FaSearch } from "react-icons/fa";
export const Container = styled.div`
  font-family: Arial, sans-serif;
  background: #fffaf0;
  padding-top: 150px;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 50px;
  background: white;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 95%;
  z-index: 1000; /* Ensure it is above other elements */

  @media (max-width: 768px) {
    padding: 15px 20px;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Logo = styled.img`
  height: 120px;
`;

export const Menu = styled.div`
  display: flex;
  gap: 20px;
  font-size: 16px;
  font-weight: bold;
  align-items: center;
`;

export const SearchBar = styled.div`
  position: relative; /* 👈 Needed for SuggestionsList to align */
  display: flex;
  align-items: center;
  background: #ffebcd;
  padding: 5px 15px;
  border-radius: 20px;
  width: 250px; /* 👈 Fixed width to match SuggestionsList */

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  padding: 5px;
  flex: 1; /* Make input take available space */
`;

export const SearchIcon = styled(FaSearch)`
  color: #b22222;
  font-size: 18px;
  margin-left: 5px;
  cursor: pointer;
`;
export const MenuIcon = styled(FaBars)`
  font-size: 24px;
  cursor: pointer;
`;

export const Hero = styled.div`
  text-align: center;
  padding: 20px;
`;

export const HeroImage = styled.img`
  width: 70%;
  height: auto;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-top: 10px;
  font-style: italic;
  color: #333;
`;

export const CollageSection = styled.div`
  display: flex;
  width: 100%;
  height: 250px; /* Adjust height as needed */
  position: relative;
  overflow: hidden;
`;

export const CollageImageContainer = styled.div`
  flex: 1; /* Ensures all images take equal width */
  position: relative;
`;

export const CollageImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(60%); /* Semi-transparent effect */
  transition: 0.3s ease-in-out;

  &:hover {
    filter: brightness(80%);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2); /* Light transparent effect */
`;

export const EventsSection = styled.div`
  background-color: black;
  padding: 40px;
  text-align: center;
  color: white;
`;

export const EventsTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  font-family: serif;
`;

export const EventsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const EventCard = styled.div`
  width: 300px;
  text-align: left;
`;

export const EventDate = styled.p`
  color: gold;
  font-size: 16px;
  font-weight: bold;
`;

export const EventDescription = styled.p`
  font-size: 14px;
`;

export const EventImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const DiscoverMore = styled.a`
  display: block;
  margin-top: 20px;
  color: white;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: gold;
  }
`;

export const FooterSection = styled.footer`
  background: #fff;
  padding: 20px;
  border-top: 2px solid #000;
  text-align: left;
  font-family: Arial, sans-serif;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row; /* Change to row to align items horizontally */
  align-items: flex-start;
  justify-content: space-between; /* Add space between items */
`;

export const FooterText = styled.p`
  font-size: 14px;
  color: #000;
  margin-bottom: 10px;
`;

export const CollaborationText = styled.p`
  font-size: 12px;
  color: #333;
  margin-bottom: 10px;
`;

export const LogosContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const LogoImage = styled.img`
  width: 60px;
  height: auto;
`;

export const DonateButton = styled.button`
  background-color: white;
  color: black;
  padding: 10px 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: gold;
  }
`;

export const SocialIcon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const FollowUs = styled.span`
  color: gold;
  font-weight: bold;
  font-size: 14px;
  padding: 5px 10px;
  border: 1px solid gold;
`;

export const FooterLogoContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start; /* Align the logo to the left */
  align-items: center; /* Center the logo vertically */
`;

export const FooterLogoImage = styled.img`
  width: 250px; /* Adjust the width as needed */
  height: auto;
  border-radius: 4px;
`;

// New Footer Bottom Section
export const FooterBottom = styled.div`
  background: black; /* Change background color to black */
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

// Social Media Section
export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;

  svg {
    color: white;
    font-size: 24px;
  }
`;

// Follow Us Button
export const FollowUsButton = styled.button`
  background: #c99924; // Adjust to match the yellow button in the image
  color: black;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

// Footer Links
export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;

  span {
    cursor: pointer;
    font-size: 14px;
    color: white;
  }
`;
export const ArtworksSection = styled.section`
  position: relative; /* Ensure the pseudo-element is positioned correctly */
  padding: 40px 20px;
  background-image: url("https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/weaving_ver_1.png"); /* Replace with your collage image URL */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  overflow: hidden;

  /* Add a grey overlay using a pseudo-element */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Grey overlay with 50% opacity */
    z-index: 1; /* Ensure it appears above the background image */
  }

  /* Ensure the content is above the overlay */
  > * {
    position: relative;
    z-index: 2;
  }

  h2 {
    font-size: 28px;
    margin-bottom: 20px;
    color: white; /* Ensure text is readable over the background */
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7); /* Add shadow for better contrast */
  }
`;

export const ArtworksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

export const ArtworkCard = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  /* Ensure the card adapts to the content size */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArtworkImage = styled.img`
  width: 100%;
  height: auto; /* Allow the image to maintain its natural aspect ratio */
  object-fit: contain; /* Ensure the full image is shown within the card */
  object-position: center; /* Centers the image within the card */
  background-color: #f9f9f9; /* Adds a light background for images with transparency */
`;
export const ArtworkTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
  color: #555;
`;
export const SeeAllButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #007bff; /* Blue button */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;
export const SuggestionsList = styled.div`
  position: absolute;
  top: 110%; /* 👈 a bit lower below SearchBar */
  left: 0;
  width: 100%; /* 👈 Match SearchBar width */
  background: white;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px; /* slight rounding for nice look */
  z-index: 20;
`;

export const SuggestionItem = styled.div`
  padding: 10px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #f2f2f2;
  }
`;
