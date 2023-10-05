// <PigCard />

import React from "react";
import PigCard from "./PigCard";

function CardContainer({hogData}){
    return(
        <div>
            <ul className="ui grid container normalText">
                {hogData.map((hog) => (

                    <PigCard key={hog.name} name={hog.name} image={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} medalAchieved={hog.highestMedalAchieved}/>
                ))}
                
            </ul>
        </div>
    )
}


export default CardContainer


// When the user clicks on the hog tile, display the other details about the hog (its specialty, weight, greased, and highest medal achieved) DONE