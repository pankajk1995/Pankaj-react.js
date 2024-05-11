import { createContext, useState } from "react";

export const MainContext=createContext()

//provide

export function MainContextprovider({children}){

    const [theme,settheme]=useState("light")

    const ToggleTheme=()=>{
            settheme(theme=="light"?"dark":"light")
        }
    return(<MainContext.Provider value={{theme,ToggleTheme}}>
        {children}
        </MainContext.Provider>)
}

