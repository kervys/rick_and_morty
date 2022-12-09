import React, { useState } from "react";
import styled from "styled-components";

const DivSearch = styled.div`
    padding: 0.9em;
    display: flex;
    flex-wrap: wrap;
  `;

  const Btn = styled.button`
    border-radius: 0.5em;
    display: block;
    padding: 0.5em;
    border: solid #06d6a0;
    position: absolute;
    left: 97%;
    top: 7%;
    color: #370617;
    font-weight: 700;
    font-size: 1em;
    &:hover {
      background-color: #ffd60a;
      cursor: pointer;
    }
  `;

  const Input = styled.input`
    border-radius: 0.5em;
    margin-left: 0.5em;
    padding: 0.5em;
    border: solid #06d6a0;
    color: #370617;
    left: 97%;
    top: 7%;
    font-weight: 700;
    font-size: 1em;
    &:hover {
      background-color: #ffd60a;
    }
  `;

export default function SearchBar(props) {
  const handleChange = (evento) => {setCharacter(evento.target.value);};
  const { onSearch } = props;
  const [character, setCharacter] = useState("");
  
  return (
   <DivSearch>
      <Input type="search" value={character} onChange={handleChange} />
      <Btn onClick={() => onSearch(character)}>Agregar</Btn>
    </DivSearch>

  );
}
