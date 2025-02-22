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
    async function getuserdetails(){
        console.log("getting user details ... ")
        const temp=userConfig.getInstance();
        const a=await temp.listUserDetails();
        const details=a.documents[0];
        console.log("details : ",details.email);
        

        usercontext?.setUserData(details.$id,details.email,details.full_name,details.phone_number,details.user_role,details.username);
    }
    return(
        <div>
            <button onClick={handlelogout}>Logout</button>
            <button onClick={showuseremail}>Show user email</button>
            <button onClick={getuserdetails}>GetUserDetails</button>
            
        </div>
    )
}