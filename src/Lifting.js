import { useState } from "react"

export default function Lifting(props){
    const [name,setName]=useState()
    function Submitter(e){
        e.preventDefault()
        props.getdata(name)


    }
    return(
        <div>
            <h1>From the below form the data come from child to parent</h1>
            <form onSubmit={Submitter}>
                <input type="text" name="" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <button type="">Submit</button>
            </form>
        </div>
    )
}