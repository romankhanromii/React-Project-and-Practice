function Deliver({Name,Job}){
    return(
        <div style={{width:"300px",border:"1px solid seagreen",height:"300px",margin:"30px" ,textAlign:"center",backgroundColor:"orange",color:"white"}}>
            <h1>{Name}</h1>
            <p>{Job}</p>
        </div>
    )
}

export default Deliver;