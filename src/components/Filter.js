import React from "react"


function Filter ({onChange}) {


    return (
        <select onChange={onChange}>
            <option>Filter for Greased Pigs</option>
            <option>Greased Pigs</option>
        </select>
    )
}

export default Filter 


