'use client'
import { appwriteConfig } from "@/appwrite/auth/authConfig";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type detailsType = {
    email: string | null,
    otp: string | null,
    userid: string | null
}
export default function SignIn() {
    const [state, setstate] = useState<number>(0);
    const [details, setdetails] = useState<detailsType>({
        email: null,
        otp: null,
        userid: null
    })
    const router = useRouter();
    const temp = appwriteConfig.getInstance();
    async function getotp() {
        setstate(2);
        if (details.email) {
            const userid = await temp.loginWithEmailOTP(details.email);
            if (userid) {
                setdetails(() => ({ ...details, userid: userid }));
                setstate(1);
            }
        }

    }

    async function verifyotp() {
        setstate(2);
        if (details.otp && details.userid) {
            const verify = await temp.verifyEmailOTP(details.userid, details.otp);
            if (verify) {
                console.log(verify);
                router.replace("/home")
                return;
            }
            setstate(0);
        }

    }
    return (
        <div className="w-full h-screen flex items-center justify-center">
            {
                state == 0 ? <div className="w-[500px] h-[500px] shadow-sm shadow-black p-[50px] kanit-thin ">
                    <p className="text-center text-[30px] font-bold">Login With OTP</p>
                    <input type="text" className="w-full h-[40px] text-[17px] outline-black border-2 border-[#e2e2e2] rounded-md px-[20px] mt-[100px]" placeholder="Email ID" onChange={(e)=>setdetails(()=>({...details,email:e.target.value}))}/>
                    <div className="w-full flex justify-center mt-[70px]">
                        <button className="px-[10px] py-[5px] border-2 border-black rounded-md font-bold" onClick={getotp}>Get OTP</button>
                    </div>
                </div> : state===1? <div className="w-[500px] h-[500px] shadow-sm shadow-black p-[50px] kanit-thin ">
                    <p className="text-center text-[30px] font-bold">Login With OTP</p>
                    <input type="text" className="w-full h-[40px] text-[17px] outline-black border-2 border-[#e2e2e2] rounded-md px-[20px] mt-[100px]" placeholder="OTP" onChange={(e)=>setdetails(()=>({...details,otp:e.target.value}))}/>
                    <div className="w-full flex justify-center mt-[70px]">
                        <button className="px-[10px] py-[5px] border-2 border-black rounded-md font-bold" onClick={verifyotp}>Validate OTP</button>
                    </div>
                </div> : <div className="w-[500px] h-[500px] shadow-sm shadow-black p-[50px] kanit-thin ">
                    <div className="w-[250px] mx-auto h-[40px] bg-[#e4e4e4] animate-pulse"></div>
                    <div className="w-full h-[40px] rounded-md bg-[#e4e4e4] mt-[100px] animate-pulse"></div>
                    <div className="w-[140px] h-[40px] mx-auto rounded-md bg-[#e4e4e4] mt-[70px] animate-pulse"></div>
                </div>
            }
        </div>
    )
}