import React, {useContext} from "react";
import DarkModeContext from "./DarkModeContext";
export default function Toolbar(){
    const mode = useContext(DarkModeContext);
    return (
        <div>
            <button className={(mode.mode ? "modeBtnLight" : "modeBtnDark") + " modeBtn"}
                    onClick={()=>mode.setMode(!mode.mode)}>{mode.mode ? "Dark mode" : "Light mode"}</button>
        </div>

    )
}