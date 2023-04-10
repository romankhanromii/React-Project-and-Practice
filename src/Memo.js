import { useMemo, useState } from "react"

export default function Memo(){
    const [add,setadd]=useState(0)
    const [Sub,setsub]=useState(100)
    const multiplication=useMemo(function multiply(){
        console.log("Hi i am memo")
        return add*10
    },[add])

    return(
        <div>
            <h1>{multiplication}</h1>
            <button type="" onClick={()=>setadd(add+1)}>Addition</button>
            <span>{add}</span><br/>
            <button type="" onClick={()=>setsub(Sub-1)}>Subtraction</button>
            <span>{Sub}</span>
        </div>
    )
}