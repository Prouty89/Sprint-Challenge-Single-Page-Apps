import React from 'react'
import styled from 'styled-components';

 const EpisodeName = styled.h3`
  font-size: 1.3rem;
`;

 const EpisodeInfo = styled.p`
  font-size: 1.3rem;
`;

 export default function EpisodeCard ({ name, episode, airDate }) {
  const style ={
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  
  return (
    <div style={style}>
      <EpisodeName>{name}</EpisodeName>
      <EpisodeInfo>{episode}</EpisodeInfo>
      <EpisodeInfo>{airDate}</EpisodeInfo>
    </div>
  );
}