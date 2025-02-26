'use client'

import GeneralLoader from "@/components/GeneralLoader";
import { firebaseconfig } from "@/config/firebase";
import { useUser } from "@/context/userContext";
import React,{useEffect,useState} from "react"


export default function ChildLayout({children}:{children:React.ReactNode}){

    const [loading,setloading]=useState<boolean>(true);
    const user=useUser();
    async function fillcontext(){
        if(user?.emailId===null){
            const fb=firebaseconfig.getInstance();
            const temp=fb.getCurrentUser();
            if(temp?.email && temp?.uid){
                user.setUserData(temp?.uid,temp?.email);
                setloading(false);
            }
        }
    }
    useEffect(()=>{
        fillcontext();
    },[])
    return(
        loading? <GeneralLoader/> : <>{children}</>
    )
}