import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"



  function Login(){
    const{handleSubmit,register,formState:{errors}}=useForm()
   
    function submitHandler(data){
        console.log("Submitted",data)
        

    }

    return(
        <div id="div-1" >
        <form onSubmit={handleSubmit(submitHandler)}>
            
        <label style={{color:"white"}}>Email:</label><br/>
        <input  className="input" type="email" placeholder="Enter the email" {...register("email",{required:true})}/><br/>
        <label  style={{color:"white"}} >Password:</label><br/>
        <input className="input" type="password" placeholder="Enter password" {...register("password",{required:true,minLength:4})}/><br/>
        <button className="btn-1" type="submit" disabled={Object.keys(errors).length}>Submit</button>
        </form>
        </div>
    )
}
export default Login;