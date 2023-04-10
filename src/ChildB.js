import ChildC from "./ChildC";

export default function ChildB({name ,Place}){
    return (
        <div>
            <ChildC name={name} Place="Mardan"/>
        </div>
    )
}