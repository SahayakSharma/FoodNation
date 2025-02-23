'use client'
import { appwriteConfig } from "@/appwrite/auth/authConfig";
import { userConfig } from "@/appwrite/db/userConfig";
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
    function showuseremail(){
        console.log(usercontext?.emailId);
        console.log("users's role is : ",usercontext?.user_role)
    }
    
    return(
        <div>
            <h1>Welcome : {usercontext?.username}</h1>
            <button onClick={handlelogout}>Logout</button>
        </div>
    )
}