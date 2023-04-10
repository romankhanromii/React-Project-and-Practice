import { useState,useEffect } from "react"
 function Fetch(){
 const [data,setdata]=useState([])
    useEffect (()=>{
        fetch("https://api.escuelajs.co/api/v1/products",{
            method:"GET",
            headers:{"Content-Type":"application/json",},
        }).then(function (data){
                return data.json()
                console.log(data)
            
        })
        .then(function(response){
            console.log(response)
            setdata(response)
        })
        .catch(function (error){
            console.log(error)
        })

    },[Fetch]);
    return(
        <div style={{ display:"grid",gridTemplateColumns:"33% 33% 33%" ,backgroundColor:"purple",color:"white",textAlign:"center"}}>
          {data.map(function(x){
            return(
                <div style={{width:"80%",height:"650px", border:"1px solid white"}}>
                    <h2>{x.title}</h2>
                    <img width={"90%"} height={"300px"} src={x.images}/>
                    <h2>{x.description}</h2>
                    <p>{x.price}</p>
                    <button style={{padding:"10px",backgroundColor:"orange",color:"white"}} type="">Add to cart</button>
                </div>
            )
          })}
        </div>
    )
}
export default Fetch;