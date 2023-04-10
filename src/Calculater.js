import { useState } from "react";
export default  function Calculater(){
const [state,setstate]  =useState("") 
 
  
    const data = (event) => {
      setstate(state.concat(event.target.name))
    };
    const clear=()=>{
        setstate("")
    }
    const delet=()=>{
        setstate(state.slice(0,-1))
    }
   
    const Calculated=()=>{
        try {
            setstate(eval(state).toString())
        } catch (error) {
            setstate("error")
        }
    }
    return(
        
        
        <div id="cont">
            <form id="form">
                
            
           <input type="text" name="" value={state}/>
           </form>
          <div id="grid">
            
         
            <button   name="7" onClick={data}>7</button>
            <button  name="8"onClick={data}>8</button>
            <button name="9" onClick={data}>9</button>
            <button  name="/" onClick={data}>/</button>
            <button   name="4" onClick={data}>4</button>
            <button  name="5" onClick={data}>5</button>
            <button name="6" onClick={data}>6</button>
            <button name="*" onClick={data}>*</button>
            <button name="1" onClick={data}>1</button>
            <button name="2" onClick={data}>2</button>
            <button name="3" onClick={data}>3</button>
            <button name="-" onClick={data}>-</button>
            <button name="0" onClick={data}>0</button>
            <button name="." onClick={data}>.</button>
            <button name="+" onClick={data}>+</button>
            <button name="=" onClick={Calculated}>=</button>
            <button name="clear" onClick={clear}>Clear</button>
            <button name="Delete" onClick={delet}>x</button>
            <button name="%" onClick={data}>%</button>
            
        </div>
        </div>
    )
}