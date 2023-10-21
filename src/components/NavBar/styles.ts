import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
`;

export const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const StyledLink = styled(GatsbyLink)`
  text-decoration: none;
  padding: 8px;
  border-radius: 16px 2px 16px 2px;
  &:link {
    color: black;
  }
  &:visited {
    color: black;
  }
  &:hover {
    background: #5ba0cc;
    /* background: #4d8db3; */
  }
`;

export const StyledHomeLink = styled(GatsbyLink)`
  text-decoration: none;
  color: #062894;
`;
