import { Link } from "react-router-dom";
import imgBeers from "../assets/beers.png"
import imgNewBeer from "../assets/new-beer.png"
import imgRandomBeer from "../assets/random-beer.png"

function Home() {
    return (
        <div>
        <div>
            <div className="container">
            <img src={imgBeers} width="20%" alt="" />
                <Link to="/beers">All Beers</Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur mauris in eros sagittis hendrerit. Morbi nunc ipsum, tempor quis justo rhoncus, tempus facilisis sapien. In volutpat tortor et iaculis egestas. Donec lacinia a est ut ullamcorper. Aliquam pulvinar pharetra magna at tempor. Integer est purus, fermentum eu erat ac, tempor finibus arcu. Donec feugiat ullamcorper tempus. Maecenas aliquam dolor ac magna aliquam iaculis. Pellentesque condimentum erat cursus, consectetur nulla non, lacinia nisl. Ut tincidunt nisl nec nisi ultrices malesuada.
                </p>
                </div>
                <div className="container">
                <img src={imgNewBeer} width="20%" alt="" />
                <Link to="/random-beer">Random Beer</Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur mauris in eros sagittis hendrerit. Morbi nunc ipsum, tempor quis justo rhoncus, tempus facilisis sapien. In volutpat tortor et iaculis egestas. Donec lacinia a est ut ullamcorper. Aliquam pulvinar pharetra magna at tempor. Integer est purus, fermentum eu erat ac, tempor finibus arcu. Donec feugiat ullamcorper tempus. Maecenas aliquam dolor ac magna aliquam iaculis. Pellentesque condimentum erat cursus, consectetur nulla non, lacinia nisl. Ut tincidunt nisl nec nisi ultrices malesuada.
                </p>
                </div>
                <div className="container">
                <img src={imgRandomBeer} width="20%" alt="" />
                <Link to="/new-beer">New Beer</Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur mauris in eros sagittis hendrerit. Morbi nunc ipsum, tempor quis justo rhoncus, tempus facilisis sapien. In volutpat tortor et iaculis egestas. Donec lacinia a est ut ullamcorper. Aliquam pulvinar pharetra magna at tempor. Integer est purus, fermentum eu erat ac, tempor finibus arcu. Donec feugiat ullamcorper tempus. Maecenas aliquam dolor ac magna aliquam iaculis. Pellentesque condimentum erat cursus, consectetur nulla non, lacinia nisl. Ut tincidunt nisl nec nisi ultrices malesuada.
                </p>
                </div>
            </div>
        </div>
    )
}

export default Home