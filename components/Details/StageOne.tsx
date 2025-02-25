'use client'
import { appwriteConfig } from "@/appwrite/auth/authConfig";
import React, { useEffect } from "react";


export default function StageOne() {
    useEffect(()=>{
        const temp=appwriteConfig.getInstance();
        async function a() {
            const user=await temp.getCurrentUserID();
            console.log(user);
        }
        a();
    },[])
    return (
        <div className="w-full h-full">
            <form action="" onSubmit={(e) => e.preventDefault()} className="w-full h-full flex items-center justify-center">
                <div className="mt-[20px] w-[500px]">
                    <p className="text-[15px]">Full Name</p>
                    <input type="text" className="w-full h-[40px] bg-[#f3f3f3] rounded-md px-[20px]" />
                </div>
            </form>
        </div>
    )
}