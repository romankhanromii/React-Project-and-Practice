 import { useReducer } from "react"
 const initialvalue={
    counter:0,
     message:"Roman khan"
 }
function Reducerfunction(previousvalue,action){
     if(action.type==="INCREAMENT"){
         return {
             ...previousvalue,
             counter:previousvalue.counter+1
         }
     } else if(action.type==="DECREAMENT"){
         return {
             ...previousvalue,
             counter:previousvalue.counter-1
         }

 }
 }
  function Counter(){
    
   
    const[state,dispatch]=useReducer(Reducerfunction,initialvalue)
   function Increament(){
     dispatch({type:"INCREAMENT"})


    }
    function Decreament(){
         dispatch({type:"DECREAMENT"})
    }
   
     return(
         <div>
            <h1>{state.counter}</h1>
             <button type="" onClick={Increament}>Increament</button>
             <button type="" onClick={Decreament}>Decreament</button>
            
         </div>
     )
     }
     export default Counter;
