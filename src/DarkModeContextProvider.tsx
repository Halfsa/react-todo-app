import {ReactNode, useState} from "react";
import DarkModeContext from "./DarkModeContext";
import ThemeBackground from "./ThemeBackground";

export default function DarkModeContextProvider({children}:{children:ReactNode}){
    const [mode,setMode] = useState(true);
    function switchMode(mode:boolean){
        console.log(mode)
        setMode(mode);
    }
    return(
        <DarkModeContext.Provider value={{mode: mode, setMode: switchMode}}>
            <div className={(mode ? "bodyLight" : "bodyDark") + " App"}>
                <header className={(mode ? "headerLight" : "headerDark") + " App-header"}>
                    {children}
                </header>
            </div>
        </DarkModeContext.Provider>
)
}