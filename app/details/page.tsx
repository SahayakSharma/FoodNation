'use client'
import React, { useEffect, useState } from "react";
import { newUser } from "@/helper/types/userDetailsTypes";
import { firebaseconfig } from "@/config/firebase";
import { userDetails } from "@/config/firestore/userDetails";
import { useRouter } from "next/navigation";

export default function Details() {
    const [details, setdetails] = useState<newUser>({
        authID: null,
        fullName: null,
        phoneNumber: null,
        userRole: "admin",
        email: null
    })
    const [loading,setloading]=useState<boolean>(false);
    const router=useRouter();
    async function handledetailsubmit() {
        try {
            setloading(true);
            if (details.email && details.authID) {
                const userdb = userDetails.getInstance();
                const newuser = await userdb.createUserDocument(details);
                alert("User Details Submitted Successfully")
                router.replace("/home");
            }
            else {
                setloading(false);
                alert("Please Fill The Rquired Details")
            }
        }
        catch (err) {
            setloading(false);
            if (err instanceof Error) alert(err.message)
            else alert("Unknown Error Encountered")
        }
    }

    useEffect(() => {
        const fb = firebaseconfig.getInstance();
        const user = fb.getCurrentUser();
        const userid = user?.uid;
        const email = user?.email;
        if (userid && email) {
            setdetails(() => ({ ...details, email: email, authID: userid }))
        }
    }, [])
    return (
        loading ? <div className="w-full h-screen flex items-center justify-center">
            <div className="w-[700px] h-[500px] shadow-md shadow-[#dddddd] p-[100px] font-medium">
                <div className="w-[200px] h-[20px] bg-[#f1f1f1] rounded-xl animate-pulse my-[20px]"></div>
                <div className="w-full h-[50px] bg-[#f1f1f1] rounded-xl animate-pulse"></div>
                <div className="w-[200px] h-[20px] bg-[#f1f1f1] rounded-xl animate-pulse my-[20px]"></div>
                <div className="w-full h-[50px] bg-[#f1f1f1] rounded-xl animate-pulse"></div>
                <div className="w-full flex justify-center mt-[40px]">
                    <div className="w-[200px] h-[40px] bg-[#f1f1f1] animate-pulse"></div>
                </div>
            </div>
        </div> :
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-[700px] h-[500px] shadow-md shadow-[#dddddd] p-[100px] font-medium">
                <p className="px-[10px] py-[20px]">Full Name</p>
                <input type="text" onChange={(e) => {
                    setdetails(() => ({ ...details, fullName: e.target.value }))
                }} className="w-full h-[50px] px-[20px] text-[17px] bg-[#f1f1f1] rounded-xl border-[1px] border-[#cecdcd]" />
                <p className="px-[10px] py-[20px]">Phone Number</p>
                <input type="text" onChange={(e) => {
                    setdetails(() => ({ ...details, phoneNumber: parseInt(e.target.value) }))
                }} className="w-full h-[50px] px-[20px] text-[17px] bg-[#f1f1f1] rounded-xl border-[1px] border-[#cecdcd]" />
                <div className="w-full flex justify-center">
                    <button className="border-2 border-black px-[7px] py-[3px] rounded-md font-bold mt-[40px]" onClick={handledetailsubmit}>Submit Details</button>
                </div>
            </div>
        </div>
    )
}