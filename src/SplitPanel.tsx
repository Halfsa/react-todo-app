import {HTMLAttributes, PropsWithChildren, ReactChild, ReactNode} from "react";
import {findAllByDisplayValue} from "@testing-library/react";
interface Props{
    left:ReactNode;
    right:ReactNode;
}

export default function SplitPanel({left,right}:Props){
    return(
        <div className={"splitPanel"}>
            <div className={"panel leftPanel"}>{left}</div>
            <div className={"panel rightPanel"}>{right}</div>
        </div>
    )
}