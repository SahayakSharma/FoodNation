'use client'
import { firebaseconfig } from "@/config/firebase";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type detailsType = {
    email: string | null,
    password: string | null,
}
export default function SignIn() {
    const [details, setdetails] = useState<detailsType>({
        email: null,
        password: null
    })
    const [loading, setloading] = useState<boolean>(false);
    const [error,seterror]=useState<string>("");
    const router = useRouter();

    const signinwithpassword = async () => {
        try {
            if(details.email && details.password){
                setloading(true)
                const fb = firebaseconfig.getInstance();
                const signin=await fb.signinusingemailpassword(details.email, details.password)
                if(signin.status!="200"){
                    setloading(false)
                    setdetails({...details,email:"",password:""})
                    seterror(signin.message)
                }
            }
        }
        catch(err){
            setloading(false);
            if(err instanceof Error) seterror(err.message)
        }
    }

    async function signinwithgoogle() {
        const fb=firebaseconfig.getInstance();
        await fb.signinwithgoogle();
    }
    return (
        loading ? <div className="w-full h-screen flex items-center justify-center ">
            <div className="w-[500px] h-[500px] p-[50px] shadow-sm shadow-black">
                <div className="w-[200px] h-[40px] bg-[#f1f1f1] mx-auto"></div>
                <div className="w-full h-[40px] bg-[#f1f1f1] mt-[50px] animate-pulse rounded-md"></div>
                <div className="w-full h-[40px] bg-[#f1f1f1] mt-[50px] animate-pulse rounded-md"></div>
                <div className="w-[100px] h-[40px] bg-[#f1f1f1] mt-[50px] animate-pulse mx-auto rounded-md"></div>
                <div className="w-full rounded-xl bg-[#f1f1f1] h-[50px] mt-[50px] animate-pulse"></div>
            </div>
        </div> :
            <div className="w-full h-screen flex items-center justify-center ">
                <div className="w-[500px] h-[500px] p-[50px] shadow-sm shadow-black">
                    <p className="text-[20px] font-bold text-center">Login To Your Account</p>
                    <input type="text" placeholder="Email ID" className="w-full h-[40px] border-2 border-[#e4e4e4] p-[20px] mt-[50px] rounded-md" onChange={(e)=>{
                        if(error!="") seterror("");
                        setdetails(()=>({...details,email:e.target.value}))
                    }}/>
                    <input type="text" placeholder="Password" className="w-full h-[40px] border-2 border-[#e4e4e4] p-[20px] mt-[50px] rounded-md" onChange={(e)=>{
                        if(error!="") seterror("");
                        setdetails(()=>({...details,password:e.target.value}))
                    }}/>
                    <div className="w-full h-[10px] mt-[10px] px-[10px] text-[13px]"><p className="font-bold text-red-600 text-right">{error}</p></div>
                    <div className="w-full flex justify-center"><button className="border-2 border-black px-[7px] py-[3px] rounded-md font-bold mt-[40px]" onClick={signinwithpassword}>Sign In</button></div>
                    <div className="w-full rounded-xl bg-blue-400 h-[50px] mt-[40px] flex items-center justify-center text-white font-bold text-[20px] cursor-pointer" onClick={signinwithgoogle}>Signin With Google</div>
                </div>
            </div>

    )
}