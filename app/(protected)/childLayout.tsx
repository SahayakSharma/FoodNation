'use client'
import React, { useEffect } from "react";
import { UserContextProvider, useUser } from "@/context/userContext";

export default function ChildLayout({children}:{children:React.ReactNode}){
    const usercontext=useUser();
    useEffect(()=>{
        console.log("user : ",usercontext?.emailId)
         
    },[])
    return(
        <>
            {children}
        </>
    )
}