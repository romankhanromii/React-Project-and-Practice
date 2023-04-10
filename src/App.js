
import './App.css';
import { Route, Routes } from 'react-router';
import { Form, NavLink } from 'react-router-dom';
import "./lg.css"

// import { Provider, createContext, useCallback, useState } from 'react';



// import Counter from './Counter';

// import Fetch from './Fetch';
// import Nav from './Nav';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Notfound from './Pages/404';
import About from './Pages/About';
import Login from './Pages/Login';
// import Deliver from './Deliver';
// import Usstate from './Usstate';
// import Reference from './Reference';
// import ChildA from './ChildA';
// import Memo from './Memo';
// import Callback from './Callback';
// import Calling from './Calling';
// import Formhandling from './Formhandling';
// import Lifting from './Lifting';
import CreateForm from './CreateForm';
import Array from './Array';
import Todo from './Todo';
import Fetch from './Fetch';
import Nav from './Nav';






// const Context=createContext();
// const Uscontext=createContext()




function App() {
  // const array=[
  //   {
  //     id:1,
  //     name:"Ahmad",
  //     location:"Karak"
  //   },
    
  // ]
  // const card=[
  //   {
  //     id:1,
  //     Name:"Roman Khan",
  //     Job:"Webdeveloper"
  //   },
  //   {
  //     id:2,
  //     Name:"Ahmad Ijaz",
  //     Job:"Frontend Developer"
  //   },
  //   {
  //     id:3,
  //     Name:"Salman Khan",
  //     Job:"Hardware deveolper "
  //   },
  //   {
  //     id:4,
  //     Name:"Wisal Mukhtiar",
  //     Job:"Data Analyst"
  //   },
  // ]
  
  // const name="Roman khan";
  // const gender="Male"
  // const [Addition ,Setaddition]=useState(0)
  // const learning=useCallback(()=>{

  // },[])
  // function getdata(data){
  //   console.log(data)
  // }
   return (
     <>
    <Nav/>
     {/* <Fetch/> */}
     {/* <CreateForm/> */}
     {/* <Array/> */}
     {/* <Todo/> */}
  {/* //   <Lifting getdata={getdata}/> */}
  {/* <Memo/> */}
     {/* <Deliver Name={"Roman Khan"} Job={"Webdeveloper"}/>
     <Deliver Name={"Ahmad"} Job={"Webdeveloper"}/>
     <Deliver Name={"Salman"} Job={"Hardware Deveoper"}/> */}
   {/* <Usstate/> */}
   {/* <Reference/> */}
   {/* <Context.Provider value={name}>
    <Uscontext.Provider value={gender}>
      <ChildA />
   </Uscontext.Provider>
   </Context.Provider>
  
   <Calling learning={learning}/>
   <h1>{Addition}</h1>
    <button type=""onClick={()=>Setaddition(Addition+1)}>Update</button> */}
  
    {/* {card.map((card)=><Deliver key={card.id} Name={card.Name} Job={card.Job}/>)} */}
     
     {/* <Nav/> */}
    <Routes>
    <Route  path='/Home' element={<Home/>}/>
      <Route  path='/About' element={<About/>}/>
      <Route  path='/Contact' element={<Contact/>}/>
      <Route  path="/Fetch" element={<Fetch/>}/>
      <Route  path="/" element={<Login/>}/>
      <Route path='/Shop' element={<Notfound/>}/>
    </Routes>
      
    {/* {array.map((array) => <Map  key={array.id} name={array.name} location={array.location}/>
    
    )} */}
    {/* <Formhandling/> */}
    
    </>
   
  );
}

export default App;
// export {Context,Uscontext}
