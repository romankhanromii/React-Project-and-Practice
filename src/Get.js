import { useState } from "react";
export default function Get(){
    const [date,setdate]=useState(null)
    const [print,setprint]=useState(false)
    const[password,setpassword]=useState(null)
    const getdata=(val)=>{
        setprint(false)
        setdate(val.target.value)

    }
    const getpassword=(pass)=>{
        setprint(false)
        setpassword(pass.target.value)
    }

    const click=()=>{
        setprint(true)
        
    }
    const tic =()=>{
        setprint(true)
    }

    return (
        <div>
            {print?
            <h1>{date}</h1>
            
            :null
            }
            {print?
            <h1>{password}</h1>
            
            :null
            }
            <label for="">Name:</label>
            <input type="text" onChange={getdata}/><br/>
            
            {/* <button type="" onClick={click}>Change data</button><br/> */}
            <label for="">Password:</label>
            <input type="password" onChange={getpassword} /><br/>

            <button type=""onClick={tic}>Get Data</button>
        </div>
    )
}