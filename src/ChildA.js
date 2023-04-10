import React from "react"
import ChildB from "./ChildB"
export default function ChildA({name,Place}){
    return (
        <div>
            <ChildB name={name} Place="mardan" />
        </div>
    )
}