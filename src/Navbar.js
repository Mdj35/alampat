import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar as StyledNavbar,
  LeftSection,
  Logo,
  Menu,
  SearchBar,
  Input,
  SearchIcon,
  MenuIcon,
  SuggestionsList, // 👈 you need to create basic styles for this (I'll show you)
  SuggestionItem, // 👈 and this too
} from "./Design/Homepage";
import logo from "./web.png";
import axios from "axios";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleInputClick = async () => {
    try {
      const response = await axios.get(
        "https://vynceianoani.helioho.st/alampat/gettribes.php",
      );
      if (Array.isArray(response.data)) {
        setSuggestions(response.data);
      }
    } catch (error) {
      console.error("Error fetching tribes:", error);
    }
  };

  const handleSuggestionClick = (tribeName) => {
    localStorage.setItem("selectedTribe", tribeName);
    navigate("/tribes");
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredSuggestions = suggestions.filter((tribe) =>
    tribe.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <StyledNavbar>
      <LeftSection>
        <MenuIcon />
        <Logo src={logo} alt="ALAMPAT" />
        <Menu>
          <span>HOME</span>
          <span>ABOUT US</span>
        </Menu>
      </LeftSection>
      <SearchBar>
        <Input
          placeholder="Search Tribes"
          value={searchTerm}
          onChange={handleInputChange}
          onClick={handleInputClick}
        />
        <SearchIcon />
        {searchTerm && (
          <SuggestionsList>
            {filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((tribe) => (
                <SuggestionItem
                  key={tribe.id}
                  onClick={() => handleSuggestionClick(tribe.name)}
                >
                  {tribe.name}
                </SuggestionItem>
              ))
            ) : (
              <SuggestionItem>No tribe found</SuggestionItem>
            )}
          </SuggestionsList>
        )}
      </SearchBar>
    </StyledNavbar>
  );
};

export default Navbar;
