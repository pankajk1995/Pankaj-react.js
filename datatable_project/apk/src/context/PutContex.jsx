import { createContext, useState } from "react";

export const PostContex=createContext()

export function PostContexProvider({children}){

    const [id,setid]=useState("")

    return <PostContex.Provider  value={{id,setid}}>{children}</PostContex.Provider>
}