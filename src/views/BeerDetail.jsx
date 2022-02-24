import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetail() {
    const [beers, setBeers] = useState([])
    const params = useParams()

    useEffect(() => {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
        .then((response) => {
          console.log("response.data", response.data);
          setBeers(response.data);
        })
        .catch((error)=>console.log(error))
    }, [params.id]);
    return (
        <>
        <div className="container">
            <img src={beers.image_url} width="80px" alt="" />
            <strong>{beers.name}</strong>
            <p>{beers.tagline}</p>
            <p>{beers.first_brewed}</p>
            <p>{beers.attenuation_level}</p>
            <p>{beers.description}</p>
            <p>{beers.contributed_by}</p>
            </div>
        </>
    )
}

export default BeerDetail