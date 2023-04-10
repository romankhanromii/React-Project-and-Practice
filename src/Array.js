import { useState } from "react"

export default function Array(){
    const [values,setvalue]=useState([])
    function Changer(){
        setvalue([...values,{
            id:values.length,
            values:"Roman"
        }])
    }
    return(

        <div>
            <ol>
            {values.map(item=>(
                <li key={item.id}>{item.value}</li>
            ))}  
            </ol>
           <button type=""onClick={Changer}>Submit</button>
            
        </div>
    )
}