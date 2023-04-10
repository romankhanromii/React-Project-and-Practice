import {  useContext } from "react"
import { Context,Uscontext } from "./App"
export default function ChildC(){
    const data=useContext(Context)
    const data1=useContext(Uscontext)
    return (
        <>
            <h1>Hi my name is {data} and my gender is {data1}</h1>


       {/* <Context.Consumer>{
        (name)=>{
                    
            return(
                   <h1>My name is {name}</h1>
            )
        }
       }
       </Context.Consumer> */}
       </>
    )
}