import React, {HTMLAttributes, PropsWithChildren} from "react";
interface Props extends PropsWithChildren<HTMLAttributes<HTMLDivElement>>{
}
export default function Card(props:Props){
    return(
        <div {...props} className={`card ${props.className}`}></div>
    )
}