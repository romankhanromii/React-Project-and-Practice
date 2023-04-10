import { useReducer } from "react"
 const data={
    message:"This is Reducer hook",
 }
function Func(obtained,action){
    if(action.type==="TEXT"){
        return{
            ...obtained,
            message:"Hello I am change through Reducer"
        }
    }
    else if(action.type==="RET"){
        return{
            ...obtained,
            message:"This is Reducer hook",
            
            
        }
    }

}

export default  function Redux(){
    const [state,dispatch]=useReducer(Func,data)
    function change(){
        dispatch({type:"TEXT"})
    }
    function dechange(){
        dispatch({type:"RET"})
    }

    return(
        <div>
            <h1>{state.message}</h1>
            <button type="" onClick={change}>Click me</button>
            <button type="" onClick={dechange}>Reset</button>
        </div>
    )
}