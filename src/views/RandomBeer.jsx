import axios from "axios";
import { useEffect, useState } from "react";


function RandomBeer() {

    const [randomBeer, setRandomBeer] = useState([])

    useEffect(() => {                   
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        console.log('response.data', response.data);
        setRandomBeer(response.data)
      });
    
  }, [] ); 
    return (
        <div className="container">
            <img src={randomBeer.image_url}  width="40px"alt="beer" />
            <h2>{randomBeer.name}</h2>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_brewed}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
        </div>
    )
}


export default RandomBeer