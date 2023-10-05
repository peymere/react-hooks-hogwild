import React, {useState} from "react";



function PigCard({name, image, weight, greased, specialty, medalAchieved}) {

    const [visible, setVisible ] = useState(true);
    function handleVisibility() {
        setVisible(!visible)
        console.log("i was clicked")
    }
    const isVisible = visible ? "hidden" : " "
    
    return (
        <div className="ui eight wide column">
            <li onClick={handleVisibility} className="pigTile">
                <img alt="pig" className="minPigTile maxPigTile" src={image}></img>
                <h3>{name}</h3>
                <p className={isVisible}>Weight: {weight} lbs.</p>
                <p className={isVisible}>{greased}</p>
                <p className={isVisible}>Specialty: {specialty}</p>
                <p className={isVisible}>Highest Medal: {medalAchieved}</p>

            </li>
        </div>
    )
}



export default PigCard