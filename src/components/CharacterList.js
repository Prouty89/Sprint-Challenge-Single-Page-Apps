import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`http://rickandmortyapi.com/api/character/`)

    .then(res => {
      setCharacters(res.data.results);
      console.log(res.data.results);
    });
    
    // .catch(err => {
    //   console.log(err);
    // });

  }, [characters]);

  return <section className='character-list grid-view'>

      <h2>
      {characters.map(char => <CharacterCard key={char.id} image={char.image} name={char.name} species={char.species} status={char.status} origin={char.origin.name} />)}
      </h2>
    </section>
};
