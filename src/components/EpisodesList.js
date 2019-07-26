import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard'

 export default function EpisodesList() {
  
  const [episodes, setEpisodes] = useState([]);

   useEffect(() => {
   
    axios.get('https://rickandmortyapi.com/api/episode/')

     .then(res => {
      setEpisodes(res.data.results);
    })

    //  .catch(err => {
    //   console.log(err);
    // })

   }, [episodes])

   return <section className='episode-list grid-view'>

       {episodes.map(ep => <EpisodeCard name={ep.name} episode={ep.episode} airDate={ep.air_date} />)}
    </section>

 }