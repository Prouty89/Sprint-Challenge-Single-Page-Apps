import React, { useEffect, useState } from 'react';
import axios from 'axios'
import LocationCard from './LocationCard'

export default function LocationsList() {
const [locations, setLocations] = useState([]);


useEffect(() => {
   
    axios.get(`http://rickandmortyapi.com/api/location/`)

    .then(res => {
      setLocations(res.data.results);
      console.log(res.data.results);
    });
    
    // .catch(err => {
    //   console.log(err);
    // });

  }, [locations]);

  return <section className='location-list grid-view'>
             {locations.map(location => <LocationCard name={location.name} type={location.type} dimension={location.dimension} residents={location.residents.length} />)}
         </section>
};



