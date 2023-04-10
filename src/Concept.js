import { createStoreHook, useDispatch } from "react-redux";
import React from "react";
import { createStore } from "redux";
const initilizer={
    message:"Hello thiis react redux"
}
function reduxfunction(previous,action){
    if(action.type==="DATA"){
        console.log(initilizer.message)

    }


}
const store =createStore(reduxfunction,initilizer)

previous.Dispatch({type:"DATA"})
export default store;