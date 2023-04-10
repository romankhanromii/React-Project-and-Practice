import { useState } from "react"
export default function Map(){
    const [Tracker,setTracker]=useState({
    
        name:"Roman",
        location:"Mardan"
    }
    )
    const  changer=() =>{
        setTracker({
            ...Tracker,
            name:"Ahmad",
            location:"karak"

        })
    }
    return(
        <div>
            <h1>{Tracker.name}</h1>
            <h2>{Tracker.location}</h2>
            <button type="" onClick={changer}>Change Person </button>
        </div>
        

    )

}