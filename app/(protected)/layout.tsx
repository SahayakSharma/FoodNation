'use client'
import React,{useEffect,useState} from "react";
import { useRouter } from "next/navigation";
import { appwriteConfig } from "@/appwrite/auth/authConfig";
import GeneralLoader from "@/components/GeneralLoader";

export default function ProtectedLayout({children}:{children:Readonly<{children:React.ReactNode}>}){
    const [loader,setloader]=useState<boolean>(true);
        const router=useRouter();
        async function checkAuthStatus(){
            const temp=appwriteConfig.getInstance();
            const status=await temp.isLoggedIn();
            if(status===false){
                router.replace("/auth/signin");
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