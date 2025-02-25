'use client'
import { appwriteConfig } from "@/appwrite/auth/authConfig";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import GeneralLoader from "@/components/GeneralLoader";

export default function AuthLayout({children}:{children:React.ReactNode}){
    const [loader,setloader]=useState<boolean>(true);
    const router=useRouter();
    async function checkAuthStatus(){
        const temp=appwriteConfig.getInstance();
        const status=await temp.isLoggedIn();
        if(status==true){
            router.replace("/home");
            return;
        }
        else setloader(false);
    }
    useEffect(()=>{
        checkAuthStatus();
    })
    return(
        loader ? <GeneralLoader/> : <> {children} </>
    )
}