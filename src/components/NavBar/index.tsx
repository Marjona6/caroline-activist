import React from "react";
import { StyledHeader, StyledNav, StyledLink, StyledHomeLink } from "./styles";

export default function NavBar() {
  return (
    <StyledHeader>
      <div>
        <StyledHomeLink to="/">Caroline Pugh-Roberts</StyledHomeLink>
        <StyledNav>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/gallery">Previous Work</StyledLink>
          <StyledLink to="/contact">Speaking Events</StyledLink>
          <StyledLink to="/shop">Trainings</StyledLink>
          <StyledLink to="/book">Book Caroline</StyledLink>
        </StyledNav>
      </div>
    </StyledHeader>
  );
}
