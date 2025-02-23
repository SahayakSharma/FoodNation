'use client'
import React, { useEffect, useState } from "react";
import { UserContextProvider, useUser } from "@/context/userContext";
import { userConfig } from "@/appwrite/db/userConfig";
import GeneralLoader from "@/components/GeneralLoader";
import { useRouter } from "next/navigation";
import { appwriteConfig } from "@/appwrite/auth/authConfig";
export default function ChildLayout({children}:{children:React.ReactNode}){
    const usercontext=useUser();
    const router=useRouter();
    const [loading,sertloading]=useState<boolean>(true);
    async function getuserdetails(){
        const temp=userConfig.getInstance();
        const auth=appwriteConfig.getInstance();
        const email=await auth.getCurrentUser()
        const a=await temp.listUserDetails(email);
        const docs=a.documents;
        if(docs.length===0){
            router.replace("/details");
        }
        const details=a.documents[0];
        if(details)usercontext?.setUserData(details.$id,details.email,details.full_name,details.phone_number,details.user_role,details.username);
        sertloading(false)
    }

    useEffect(()=>{
        const email=usercontext?.emailId;
        if(email==null){
            getuserdetails();
        }
        
         
    },[])
    return(
        loading ? <GeneralLoader/> : <> {children} </>
    )
}