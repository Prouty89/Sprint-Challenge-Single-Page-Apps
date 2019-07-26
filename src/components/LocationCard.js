import React from 'react'
import styled from 'styled-components'

const LocationName = styled.h3`
font-size: 1.3rem;
`
const LocationInfo = styled.h3`
fonst-size: 1.3rem;
`;

export default function LocationCard ({ name, type, dimension, residents }) {

  return (
    <div>
      <LocationName>{name}</LocationName>
      <LocationInfo>{type}</LocationInfo>
      <LocationInfo>{dimension}</LocationInfo>
      <LocationInfo>Number of Residents: {residents}</LocationInfo>
    </div>
  )
}
