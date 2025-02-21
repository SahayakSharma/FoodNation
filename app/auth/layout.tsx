'use client'
import { appwriteConfig } from "@/appwrite/auth/authConfig";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthLayout({children}:{children:Readonly<{children:React.ReactNode}>}){
    const [loader,setloader]=useState<boolean>(true);
    const router=useRouter();
    async function checkAuthStatus(){
        const temp=appwriteConfig.getInstance();
        const status=await temp.isLoggedIn();
        if(status===true){
            router.replace("/home");
            return;
        }
        else setloader(false);
    }
    useEffect(()=>{
        checkAuthStatus();
    })
    return(
        loader ? <p>Loading ... </p> : <> {children} </>
    )
}