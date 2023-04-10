// import { useRef } from "react"


// export default function  Formhandling(){
//     const mydata=useRef()
//     const mydata1=useRef()

//     function SubmitHandler(e){
//         e.preventDefault();
//         console.log((mydata.current.value))
       
//     }
//     function SubmitHandler(e){
//         e.preventDefault();
//         console.log((mydata1.current.value))
       
//     }

//     return(
//         <div style={{textAlign:"center",backgroundColor:"wheat"}}>
//             <form onSubmit={SubmitHandler}>
//             <label >Enter Your Name :</label><br/>
//                 <input style={{padding:"10px",backgroundColor:"skyblue",color:"white"}} type="text" ref={mydata}/><br/>
//                 <label >Enter Your Email:</label><br/>
//                 <input style={{padding:"10px",backgroundColor:"skyblue",color:"white"}} type="text" ref={mydata1}/><br/>
//                 <button style={{padding:"10px",backgroundColor:"skyblue",marginTop:"10px"}}type="">Submit</button>
//             </form>
//         </div>
//     )
// }
import { useState } from "react"
export default function Formhandling(){
    const [Name,setName]=useState()
    const [pass,setpass]=useState()
    const[print,setprint]=useState(false)
    function SubmitName(e){
        console.log(e.target.value)
        setName(e.target.value)
        setprint(false)


    }
    function Submitpass(e){
        console.log(e.target.value)
        setpass(e.target.value)
        
        setprint(false)

    }
    
    return(
        <div>
             {
                    print?
                    <h1>My First Name is  {Name} and My last name is {pass}</h1>  :null
            }
             
            
            <form >
               
              
            <label >First Name:</label>
            <input type="text" name="" value={Name} onChange={SubmitName}/><br/>
            <label >Last Name:</label>
            <input type="text" name="" value={pass} onChange={Submitpass}/><br/>
            <button type="" onClick={()=>setprint(true)}>Submit</button>
            
            </form>
        </div>
    )
}