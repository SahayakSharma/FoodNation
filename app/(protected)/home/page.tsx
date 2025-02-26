'use client'
import { firebaseconfig } from "@/config/firebase";
import { useUser } from "@/context/userContext";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
    const usercontext = useUser();
    const router = useRouter();
    async function handlelogout() {
        try {
            const fb = firebaseconfig.getInstance();
            const logout = fb.signout();
        }
        catch(err){
            if(err instanceof Error) alert(err.message);
        }
    }

    return (
        <div>
            <h1>Welcome : {usercontext?.emailId}</h1>
            <button onClick={handlelogout}>Logout</button>
        </div>
    )
}