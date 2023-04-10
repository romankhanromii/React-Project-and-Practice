import { NavLink } from "react-router-dom";
function Nav(){
    return(
        <div style={{width:"100%",height:"100px",backgroundColor:"seagreen",}}>
          <nav style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <h1 style={{marginLeft:"50px",color:"white",}}>Ecommerce</h1>

      
      <ul style={{display:"flex",flexDirection:"row",listStyle:"none",padding:"10px" ,justifyContent:"space-between",fontWeight:"bolder" }}>
      <li style={{marginRight:"100px"}}>
          <NavLink style={{textDecoration:"none",color:"white"}} to="/Home">Home</NavLink>
        </li>
        <li style={{marginRight:"100px"}}>
          <NavLink style={{textDecoration:"none",color:"white"}} to="/About">About</NavLink>
        </li>
        <li style={{marginRight:"100px"}}>
          <NavLink style={{textDecoration:"none",color:"white"}} to="/Fetch">Shopping</NavLink>
        </li>
        <li style={{marginRight:"100px"}}>
          <NavLink style={{textDecoration:"none",color:"white"}} to="/Contact">Contact</NavLink>
        </li>
        <li style={{marginRight:"100px"}}>
          <NavLink style={{textDecoration:"none",color:"white"}} to="/">Login</NavLink>
        </li>
      </ul>
    </nav>
        </div>
    )
}
export default Nav;