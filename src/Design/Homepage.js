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
  display: flex;
  align-items: center;
  background: #ffebcd;
  padding: 5px 15px;
  border-radius: 20px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  padding: 5px;
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
  background: #c99924;  // Adjust to match the yellow button in the image
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
