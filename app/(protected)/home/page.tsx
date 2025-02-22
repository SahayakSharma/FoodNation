'use client'
import { appwriteConfig } from "@/appwrite/auth/authConfig";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home(){
    const router=useRouter();
    async function handlelogout(){
        const temp=appwriteConfig.getInstance();
        await temp.logout()
        .then((res)=>router.replace("/auth/signin"));
        
    }
    return(
        <div>
            <button onClick={handlelogout}>Logout</button>
        </div>
    )
}