import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/theme-context";

const StyledButton = styled.button`
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.color};
  padding: 8px 16px;
  width:200px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
  }
`;



export const Button = (props) => {
    const { theme } = useContext(ThemeContext);
    
    return (
        
            <StyledButton {...props} theme={theme} />
        
    );
};