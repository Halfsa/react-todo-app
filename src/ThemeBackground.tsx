import {useContext, useEffect} from "react";
import DarkModeContext from "./DarkModeContext";

const ThemeBackground = ()=>{
    const {mode} = useContext(DarkModeContext);
    useEffect(() => {
        document.body.style.backgroundColor = mode?"black":"white";
    }, [mode]);
    return null;
};
export default ThemeBackground