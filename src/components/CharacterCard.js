import React from 'react'
import styled from 'styled-components'

//- [x] Use a styling or component library.

const CharacterImg = styled.img`
height: 175px;
width: 150px;
`;

const CharacterName = styled.h2`
text-align: center;
`;

const CharacterAtts = styled.p`
hover: {
  color: blue
}
`;

//Maybe style whole card? 


export default function CharacterCard ({ image, name, species, status, origin }) {

  
  return (

  <div>
    <CharacterImg src={image}/>
    <CharacterName>{name}</CharacterName>
    <CharacterAtts>
      Species: {species}
       / Origin: {origin}
       / Status: {status}
    </CharacterAtts>
  </div>

  );
};
