import { useState,useEffect} from "react"
import React from "react"
export default function Usstate(){
    const [count,setcount]=useState(0)
    const [counter,setcounter]=useState(15)
    ///////////////////////////Use effect //////////////////////////
    //////It take one callback function and 1 other parameter ///////
    useEffect(()=>{
       const timer=setInterval(()=>{
        if(counter!==0){
            setcounter(counter-1)
        }else{
            setcounter(20)
        }
        
       },1000)
       return()=>{
        clearInterval(timer)
       }
    },[counter])
    function update(){
        setcount(count + 1)
    }
    function reset(){
        setcount(0)
    }
    return(
        <div style={{textAlign:"center" ,marginTop:"20px" }}>
            <h1>Button click  {count} time</h1>
            <button style={{marginLeft:"10px",padding:"10px",backgroundColor:"orange",color:"white"}} type="" onClick={update}>Click</button>
            <button style={{marginLeft:"10px",padding:"10px",backgroundColor:"orange",color:"white"}} type="" onClick={reset}>Reset</button>
            <h1>{counter}</h1>
        </div>
    )
}