import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


function Beers() {
    const [beers, setBeers] = useState([])

    useEffect(() => {                   
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log('response.data', response.data);
        setBeers(response.data)
      });
    
  }, [] ); 
    return (
        <>
        
        {beers.map((beer) => {
            return (
                <div className="container">
                    <img src={beer.image_url} width="40px" alt="" />
                    <Link to={`/beers/${beer._id}`}><strong>{beer.name}</strong></Link>
                    <aside>{beer.tagline}</aside>
                    <p>Created by: {beer.contributed_by}</p>
                    
                </div>
            )
        })}
        </>
    )
}

export default Beers