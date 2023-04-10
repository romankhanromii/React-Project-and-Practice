import { useState } from "react"

export default  function Todo(){
    const [activity,setactivity]=useState("")
    const [listdata,setlistdata]=useState([])
    function addactivity(){
        setlistdata((listdata)=>{
            const updated=[...listdata,activity]
            console.log(updated)
            setactivity("")
            return updated
        })
    }
    function Remover (index) {
        const list = [...listdata];
        list.splice(index, 1);
        setlistdata(list);
      }
    return(
        
        <>
        <div>
            <h1>This is todo list</h1>
        </div>
        <div>
            <input type="text"  value={activity} onChange={(e)=>{
                setactivity(e.target.value)
              
            }}/>
              <button type="" onClick={addactivity}> ADD</button>
              <p>Here the list data are present</p>
              {listdata!=[]&&listdata.map((data,i)=>{
                    return(
                        <>
                        <p key={i}>
                            <div>
                                {data}
                                <button type=""  onClick={() => Remover(i)}>remove</button>
                            </div>
                           
                        </p>
                        </>
                    )
              })}

        </div>
        
        </>
    )
}