'use client'
import { appwriteConfig } from "@/appwrite/auth/authConfig";
import { userConfig } from "@/appwrite/db/userConfig";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import GeneralLoader from "@/components/GeneralLoader";
export default function DetailLayout({children}:{children:React.ReactNode}){
    const router=useRouter();
    const [loading,setloading]=useState<boolean>(false);

    async function checkdetailentry(email:string) {
        const userdb=userConfig.getInstance();
        const userrec=await userdb.listUserDetails(email);
        if(userrec.documents.length > 0){
            console.log("User details are already there")
            router.replace("/home");
        }
        else{
            setloading(false);
        }
    }
    async function checkauthstatus(){
        const app=appwriteConfig.getInstance();
        const loginstatus=await app.isLoggedIn();
        if(loginstatus===false){
            router.replace("/signin");
        }
        else{
            const email=await app.getCurrentUser();
            checkdetailentry(email);
        }
    }
    useEffect(()=>{
        // checkauthstatus();
    })
    return(
        loading ? <GeneralLoader/> : <> {children} </>
    )
}