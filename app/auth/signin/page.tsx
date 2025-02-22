'use client'
import { appwriteConfig } from "@/appwrite/auth/authConfig";
import { useRouter } from "next/navigation";
import React from "react";

export default function SignIn(){
    const router=useRouter();
    async function handlesignin() {
        const temp=appwriteConfig.getInstance();
        const signin=await temp.loginUsingEmailPassword("sahayaksharma3@gmail.com","Peraglider@06");
        router.replace("/home");
    }
    return(
        <div>
            
            <button onClick={handlesignin}>Signin</button>
        </div>
    )
}