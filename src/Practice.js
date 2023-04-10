import { useState} from "react"
function Practice({}){
   
   const [Name,setname]=useState("Roman");
   const [Desc,setDesc]=useState("Web Developer")
   
    const handler=()=>{
           
            console.log("Clicked")
            setname("Roman khan")
            setDesc("Frontend Developer")
            
        }
        
   
   
    return (
        <div>
            <h1 style={{background:"Skyblue",textAlign:"Center",color:"white"}}>{Name}</h1>
            <p style={{background:"orange",textAlign:"Center",color:"white"}}>{Desc}</p>
            <button style={{backgroundColor:"orange",textAlign:"Center",padding:"10px",color:"white"}} type="" onClick={handler}>Click me</button>
        </div>
    )
}

export default Practice;