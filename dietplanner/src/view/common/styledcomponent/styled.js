import styled from "styled-components";
import {NavLink} from "react-router-dom"


export const StyledNavLink = styled(NavLink)`
  color: white;
  display: block;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;
  
  &.active {
    text-decoration: underline;
    color: whitesmoke;
  };
`;