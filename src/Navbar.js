import React from "react";
import {
  Navbar as StyledNavbar,
  LeftSection,
  Logo,
  Menu,
  SearchBar,
  Input,
  SearchIcon,
  MenuIcon
} from "./Design/Homepage";
import logo from "./web.png";

const Navbar = () => {
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
        <Input placeholder="Search" />
        <SearchIcon />
      </SearchBar>
    </StyledNavbar>
  );
};

export default Navbar;