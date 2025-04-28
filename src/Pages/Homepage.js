import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  Container,
  Hero,
  HeroImage,
  Description,
  CollageSection,
  CollageImageContainer,
  CollageImage,
  Overlay,
  ArtworksSection,
  ArtworksGrid,
  ArtworkCard,
  ArtworkImage,
  ArtworkTitle,
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
  FollowUsButton,
  SeeAllButton,
} from "../Design/Homepage";
import Navbar from "../Navbar";
import logo from "../logo2.png";
import axios from "axios";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { ClipLoader } from "react-spinners"; // Import the loading spinner
import { motion } from "framer-motion"; // Import framer-motion for animations

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tribes, setTribes] = useState([]);
  const [showAllTribes, setShowAllTribes] = useState(false); // 👈 new state for showing all tribes
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://vynceianoani.helioho.st/alampat/events.php",
        );
        const data = await response.json();
        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);
  useEffect(() => {
    const fetchTribes = async () => {
      try {
        const response = await axios.get(
          "https://vynceianoani.helioho.st/alampat/gettribes.php",
        );
        setTribes(response.data);
      } catch (error) {
        console.error("Error fetching tribes:", error);
      }
    };

    fetchTribes();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const handleSeeAllClick = () => {
    setShowAllTribes(true);
  };

  const handleTribeClick = (tribeName) => {
    localStorage.setItem("selectedTribe", tribeName); // Store the tribe's name in local storage
    navigate("/tribes"); // Navigate to the /tribes page
  };
  return (
    <>
      <Navbar />
      <Container>
        <Hero>
          <HeroImage
            src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/weaving_ver_1.png"
            alt="Hero"
          />
          <Description>
            <strong>ALAMPAT</strong> is created to promote all kinds of arts
            created by our indigenous people and protect their rights as the
            owner of their creation.
          </Description>
        </Hero>

        {/* Tribes/Artworks Section */}

        <ArtworksSection>
          <h2>Tribes/Artworks</h2>
          {loading ? (
            <ClipLoader size={50} color={"#123abc"} loading={loading} />
          ) : (
            <ArtworksGrid>
              {(showAllTribes ? tribes : tribes.slice(0, 4)).map(
                (tribe, index) => (
                  <motion.div
                    key={tribe.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }} // 👈 nice staggered animation
                  >
                    <ArtworkCard
                      onClick={() => handleTribeClick(tribe.name)}
                      style={{ cursor: "pointer" }}
                    >
                      <ArtworkImage
                        src={`data:image/jpeg;base64,${tribe.featured_image}`}
                        alt={tribe.name}
                      />
                      <ArtworkTitle>{tribe.name}</ArtworkTitle>
                    </ArtworkCard>
                  </motion.div>
                ),
              )}
            </ArtworksGrid>
          )}
          {!showAllTribes && (
            <SeeAllButton onClick={handleSeeAllClick}>
              See All Tribes
            </SeeAllButton>
          )}
        </ArtworksSection>
        {/* Events Section */}
        <EventsSection>
          <EventsTitle>Events</EventsTitle>
          {loading ? (
            <ClipLoader size={50} color={"#123abc"} loading={loading} />
          ) : events.length > 0 ? (
            <EventsContainer>
              {events.map((event) => (
                <EventCard key={event.id}>
                  <EventDate>{formatDate(event.date)}</EventDate>
                  <EventImage
                    src={`data:image/jpeg;base64,${event.image}`}
                    alt="Event"
                  />
                  <EventDescription>{event.description}</EventDescription>
                </EventCard>
              ))}
            </EventsContainer>
          ) : (
            <p
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "1.2rem",
              }}
            >
              No upcoming events.
            </p>
          )}
          <DiscoverMore>Discover More</DiscoverMore>
        </EventsSection>

        {/* Footer Section */}
        <FooterSection>
          <FooterContainer>
            <FooterLogoContainer>
              <FooterLogoImage src={logo} alt="Footer Logo" />
            </FooterLogoContainer>
            <div>
              <FooterText>
                ALAMPAT is created to promote all kinds of arts created by our
                indigenous people and protect their rights as the owner of their
                creation.
              </FooterText>
              <CollaborationText>
                In Collaboration with Holy Cross of Davao College under the
                office of Culture in the Arts and Institute of Davao Studies
              </CollaborationText>

              {/* Collaboration Logos */}
              <LogosContainer>
                <LogoImage
                  src="https://www.hcdc.edu.ph/wp-content/uploads/2018/02/hcdclogo.png"
                  alt="Collaboration Logo 2"
                />
              </LogosContainer>
            </div>
          </FooterContainer>
        </FooterSection>
      </Container>
      <FooterBottom>
        <DonateButton>Donate</DonateButton>
        <SocialMediaContainer>
          <FollowUsButton as="a" href="https://www.facebook.com/hcdcofficial">
            follow us
          </FollowUsButton>
        </SocialMediaContainer>
        <FooterLinks>
          <span>Learn more</span>
          <span>FAQs</span>
        </FooterLinks>
      </FooterBottom>
    </>
  );
};

export default HomePage;
