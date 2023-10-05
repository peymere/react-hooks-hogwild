// <PigCard />

import React from "react";
import PigCard from "./PigCard";

function CardContainer({hogData}){
    return(
        <div>
            Hello from CardContainer
            <ul className="ui grid container">
                {hogData.map((hog) => (
                    <PigCard key={hog.name} name={hog.name} image={hog.image} />
                ))}
                
            </ul>
        </div>
    )
}


export default CardContainer