import React from "react";
interface DarkModeContextValue{
    mode:boolean;
    setMode:(darkMode:boolean)=>void;
}

const DarkModeContext = React.createContext<DarkModeContextValue>({mode:false,setMode: null as any});
export default DarkModeContext;