
import { useEffect, useState } from "react";
import axios from "axios";
import Card from './Card'

const Pokemon = () => {
 const [pokemones, setPokemones] = useState([])
 const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setPokemones(res.data.results);
    });
  }, []);


  return (
    <>  

    {pokemones.map((pokemon, index) =>(
        <Card key={index} pokemon={pokemon} />
    ))}
    
    </>
  )
}


export default Pokemon