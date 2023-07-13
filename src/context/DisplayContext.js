"use client"
import { createContext, useState } from "react";

export const DisplayContext=createContext()

export const DisplayContextProvider=({children})=>{
    const [changeNav,setChange]=useState(false)
    const change_nav=(state)=>{
        setChange(state)
    }
    return(
        <DisplayContext.Provider value={{changeNav,change_nav }}>
            {children}
        </DisplayContext.Provider>
    )
}