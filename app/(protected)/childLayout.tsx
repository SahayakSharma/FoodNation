'use client'

import { appwriteConfig } from "@/appwrite/auth/authConfig";
import GeneralLoader from "@/components/GeneralLoader";
import { useUser } from "@/context/userContext";
import React,{useEffect,useState} from "react"


export default function ChildLayout({children}:{children:React.ReactNode}){

    const [loading,setloading]=useState<boolean>(true);
    const user=useUser();
    async function fillcontext(){
        const auth=appwriteConfig.getInstance();
        if(user?.userId===null){
            console.log("setting context values ...")
            const userid=await auth.getCurrentUserID();
            const email=await auth.getCurrentUser();
            user.setUserData(userid,email);
        }
        setloading(false);
    }
    useEffect(()=>{
        fillcontext();
    },[])
    return(
        loading? <GeneralLoader/> : <>{children}</>
    )
}