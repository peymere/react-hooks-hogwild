import React, {useState} from "react";
import Filter from "./Filter"

function Header({hogs}) {

    const [greaseFilter, setGreaseFilter] = useState("All")
	function handleFilterChange (e) {
        setGreaseFilter(e.target.value)
		console.log("filter was changed")

	}
    const hogsToDisplay = hogs.filter((hog) => {
        if (greaseFilter === "All") return true
        return hog.greased === greaseFilter
    })

    return(
        <div>
            <Filter onChange={handleFilterChange} />

        </div>
    )
}


export default Header

//Allow the user to filter the hogs that are greased

    //if greased = true, show greased pigs
    //if greased = false, show all pigs
    //if the filter is set to greased, and the grease is true, return those pigs, else show all pigs

