import { useForm } from "react-hook-form"
  function Form(){
    const{handleSubmit,register,formState:{errors}}=useForm()
   
    function submitHandler(data){
        console.log("Submitted",data)

    }

    return(
        <div id="div-1">
        <form onSubmit={handleSubmit(submitHandler)}>
            
        
        <input  className="input" type="email" placeholder="Enter the email" {...register("email",{required:true})}/><br/>
        <input className="input" type="password" placeholder="Enter password" {...register("password",{required:true,minLength:4})}/><br/>
        <button className="input" type="submit" disabled={Object.keys(errors).length}>Submit</button>
        </form>
        </div>
    )
}
export default Form;