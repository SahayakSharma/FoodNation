'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import GeneralLoader from "@/components/GeneralLoader";
import { firebaseconfig } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";
export default function AuthLayout({children}:{children:React.ReactNode}){
    const [loader,setloader]=useState<boolean>(true);
    const router=useRouter();
    async function checkAuthStatus(){
        const fb=firebaseconfig.getInstance();
    }
    useEffect(()=>{
        onAuthStateChanged(auth,(data)=>{
            if(data){
                router.replace("/home");
            }
            else setloader(false)
        })
    },[onAuthStateChanged])
    return(
        loader ? <GeneralLoader/> : <> {children} </>
    )
}