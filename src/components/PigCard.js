import React from "react";



function PigCard({name, image}) {
    
    return (
        <div className="ui eight wide column">
            <li className="pigTile">
                <img className="minPigTile maxPigTile" src={image}></img>
                <h3>{name}</h3>

            </li>
        </div>
    )
}



export default PigCard