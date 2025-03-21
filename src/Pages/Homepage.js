import React, { useEffect, useState } from "react";
import {
  Container,
  Hero,
  HeroImage,
  Description,
  CollageSection,
  CollageImageContainer,
  CollageImage,
  Overlay,
  EventsSection,
  EventsTitle,
  EventsContainer,
  EventCard,
  EventDate,
  EventDescription,
  EventImage,
  DiscoverMore,
  FooterSection,
  FooterContainer,
  FooterText,
  CollaborationText,
  LogosContainer,
  LogoImage,
  DonateButton,
  SocialMediaContainer,
  FollowUs,
  FooterLinks,
  FooterLogoContainer,
  FooterLogoImage,
  FooterBottom,
  FollowUsButton
} from "../Design/Homepage";
import Navbar from "../Navbar";
import logo from "../logo2.png"
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { ClipLoader } from "react-spinners"; // Import the loading spinner

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://vynceianoani.helioho.st/alampat/events.php");
        const data = await response.json();
        setEvents(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Hero>
          <HeroImage src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/weaving_ver_1.png" alt="Hero" />
          <Description>
            <strong>ALAMPAT</strong> is created to promote all kinds of arts created by our indigenous people and protect their rights as the owner of their creation.
          </Description>
        </Hero>

        {/* Image Collage Section */}
        <CollageSection>
          <CollageImageContainer>
            <CollageImage src="https://images.squarespace-cdn.com/content/v1/5ac530cff2e6b1f8c1cee361/1595389766038-RS936KCXGQFD124SHP56/4+Ritual+bowl%2C+Ifugao%2C+QB+IMG-8662.jpg" alt="Handwoven Art 1" />
            <Overlay />
          </CollageImageContainer>
          <CollageImageContainer>
            <CollageImage src="https://images.squarespace-cdn.com/content/v1/5ac530cff2e6b1f8c1cee361/1595389766038-RS936KCXGQFD124SHP56/4+Ritual+bowl%2C+Ifugao%2C+QB+IMG-8662.jpg" alt="Basket Weaving" />
            <Overlay />
          </CollageImageContainer>
          <CollageImageContainer>
            <CollageImage src="https://images.squarespace-cdn.com/content/v1/5ac530cff2e6b1f8c1cee361/1595389766038-RS936KCXGQFD124SHP56/4+Ritual+bowl%2C+Ifugao%2C+QB+IMG-8662.jpg" alt="Cultural Handcrafts" />
            <Overlay />
          </CollageImageContainer>
          <CollageImageContainer>
            <CollageImage src="https://images.squarespace-cdn.com/content/v1/5ac530cff2e6b1f8c1cee361/1595389766038-RS936KCXGQFD124SHP56/4+Ritual+bowl%2C+Ifugao%2C+QB+IMG-8662.jpg" alt="Traditional Jewelry" />
            <Overlay />
          </CollageImageContainer>
        </CollageSection>

        {/* Events Section */}
        <EventsSection>
          <EventsTitle>Events</EventsTitle>
          {loading ? (
            <ClipLoader size={50} color={"#123abc"} loading={loading} /> // Loading spinner
          ) : (
            <EventsContainer>
              {events.map((event) => (
                <EventCard key={event.id}>
                  <EventDate>{formatDate(event.date)}</EventDate>
                  <EventImage src={`data:image/jpeg;base64,${event.image}`} alt="Event" />
                  <EventDescription>{event.description}</EventDescription>
                </EventCard>
              ))}
            </EventsContainer>
          )}
          <DiscoverMore>Discover More</DiscoverMore>
        </EventsSection>

        {/* Footer Section */}
        <FooterSection>
          <FooterContainer>
            <FooterLogoContainer>
              <FooterLogoImage src={logo} alt="Footer Logo" /> {/* Add your logo image here */}
            </FooterLogoContainer>
            <div>
              <FooterText>ALAMPAT is created to promote all kinds of arts created by our indigenous people and protect their rights as the owner of their creation.</FooterText>
              <CollaborationText>
                In Collaboration with Holy Cross of Davao College under the office of Culture in the Arts and Institute of Davao Studies
              </CollaborationText>

              {/* Collaboration Logos */}
              <LogosContainer>
                <LogoImage src="https://www.hcdc.edu.ph/wp-content/uploads/2018/02/hcdclogo.png" alt="Collaboration Logo 1" />
                <LogoImage src="https://www.hcdc.edu.ph/wp-content/uploads/2018/02/hcdclogo.png" alt="Collaboration Logo 2" />
              </LogosContainer>
              </div>
          </FooterContainer>
        </FooterSection>
      </Container>
              {/* Donate Button */}
              <FooterBottom>
  {/* Donate Button */}
  <DonateButton>Donate</DonateButton>

  {/* Social Media Section */}
  <SocialMediaContainer>
    <FollowUsButton>follow us</FollowUsButton>
    <FaInstagram />
    <FaFacebook />
    <span>ms.mwn</span>
    <span>marwen escobar</span>
  </SocialMediaContainer>

  {/* Footer Links */}
  <FooterLinks>
    <span>Learn more</span>
    <span>FAQs</span>
  </FooterLinks>
</FooterBottom>

          
    </>
  );
};

export default HomePage;