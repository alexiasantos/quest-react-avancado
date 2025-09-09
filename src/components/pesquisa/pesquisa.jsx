import styled from "styled-components";
import { ThemeContext } from "../../contexts/theme-context";
import React, { useContext, useState } from "react";

const StyledButton = styled.button`
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.color};
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
  }
`;

const StyledInput = styled.input`
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.background|| "#fff"};
  border: 1px solid ${props => props.theme.color};
  padding: 8px 12px;
  border-radius: 4px;
  margin-right: 8px;
  outline: none;
  font-size: 1em;
  transition: border 0.2s;

  &:focus {
    border-color: #2a75bb;
  }
`;

const PesquisaContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;



const Pesquisa = ({ onSearch }) => {
    const { theme } = useContext(ThemeContext);
    const [input, setInput] = useState("");

    const handleSearch = () => {
        if (onSearch) onSearch(input.trim().toLowerCase());
    };

    return (
        <PesquisaContainer>
            <StyledInput
                theme={theme}
                placeholder="Pesquisar por tipo..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSearch()}
            />
            <StyledButton theme={theme} onClick={handleSearch}>Pesquisar</StyledButton>
        </PesquisaContainer>
    );
};


export default Pesquisa