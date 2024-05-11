import { createContext, useState } from "react";

export const AuthContext = createContext()

export function AuthContextProvider({children})
{
    const [isauth,setAuth]=useState(false)

    const login=()=>
        {
            setAuth(true)
        }

        const logout=()=>
            {
                setAuth(false)
            }


    return(<AuthContext.Provider value={{isauth,login,logout}}>
        {children}
        
        </AuthContext.Provider>)
}