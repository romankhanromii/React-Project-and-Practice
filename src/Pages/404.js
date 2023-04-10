import { NavLink } from "react-router-dom";

export default  function Notfound(){
    return(
        <div>
            <h1>Page Not found</h1>
            <NavLink to={"/"}>go to home page</NavLink>
        </div>
    )
}