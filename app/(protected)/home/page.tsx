'use client'
import { appwriteConfig } from "@/appwrite/auth/authConfig";
import { useUser } from "@/context/userContext";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home(){
    const usercontext=useUser();
    const router=useRouter();
    async function handlelogout(){
        const temp=appwriteConfig.getInstance();
        await temp.logout()
        .then((res)=>router.replace("/auth/signin"));     
    }
    
    return(
        <div>
            <h1>Welcome : {usercontext?.emailId}</h1>
            <button onClick={handlelogout}>Logout</button>
        </div>
    )
}