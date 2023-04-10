import { useRef } from "react"
import { useState } from "react"

export default function Reference(){
    const Element=useRef("")
    const [Name,Setname]=useState("Roman khan")
    console.log(Element)
    function Changer(){
        Setname("Faizan khan")
        Element.current.style.color="white"
        Element.current.style.background="orange"
    }
    return(
        <div>
            <h1  ref={Element} >{Name}</h1>
            <button type="" onClick={Changer}>Change</button>
        </div>
    )
}