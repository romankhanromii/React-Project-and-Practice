import { useState } from "react"
import Calling from "./Calling"

export default function Callback(){
    const [Addition ,Setaddition]=useState(0)
    return (
       
        <div>
            <Calling/>
            <h1>{Addition}</h1>
            <button type=""onClick={()=>Setaddition(Addition+1)}>Update</button>
            
        </div>
    )
}