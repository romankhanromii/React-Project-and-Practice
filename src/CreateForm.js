import { useEffect, useState } from "react"

export default function CreateForm(){
    const data={name:"",email:"",password:""}
    const[inputdata,setinputdata]=useState(data)
    const [print,setprint]=useState(false)

    function handler(e){
        setinputdata({
            ...inputdata,
            [e.target.name]:e.target.value,
            


        })
        console.log(inputdata)
    }
    useEffect(()=>{},[print])
    function SubmitHandler(e){
        e.preventDefault()
        if(!inputdata.name ||!inputdata.email||!inputdata.password){
            alert("All the input field must be filled")
        } else{
            setprint(true)
        }

    }
    return(
        
        <>
            {
            print?
            <h1>Hello {inputdata.name},You are register Succesfully</h1>:""
        }
        
        
        
        <form onSubmit={SubmitHandler}>
            
        
        <div>
            <h1>Registration Form</h1>
        </div>
        <div>
            <input type="text" name="name" value={inputdata.name} placeholder="Enter Your Name" onChange={handler}/>
        </div>
        <div>
            <input type="email" name="email" value={inputdata.email} placeholder="Enter Your Email" onChange={handler}/>
        </div><div>
            <input type="password" name="password" value={inputdata.password} placeholder="Enter Your Password" onChange={handler}/>
        </div>
        <div>
            <button type="">Submit</button>
        </div>

        </form>
        </>
            )
}