import { firebaseconfig } from "@/config/firebase";
import React, { useState } from "react";


type detailType={
    email:string|null,
    password:string|null,
    cnf:string|null
}
export default function SignUpBox(){
    const [loading,setloading]=useState<boolean>(false);
    const [details,setdetails]=useState<detailType>({
        email:null,
        password:null,
        cnf:null
    })
    async function createAccount(){
        try{
            setloading(true);
            if(details.email && details.password && details.password===details.cnf){
                const fb=firebaseconfig.getInstance();
                const newacc=await fb.createuserwithemailpassword(details.email,details.password);
                if(newacc.status!="200"){
                    setloading(false);
                    seterror(newacc.message);
                }
            }
            else{
                seterror("Please provide all details")
            }
        }
        catch(error){
            setloading(false);
            if(error instanceof Error) seterror(error.message);
        }
    }
    const [error,seterror]=useState<string>("");
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
                    <p className="text-[20px] font-bold text-center">Create New Account</p>
                    <input type="text" placeholder="Email ID" className="w-full h-[40px] border-2 border-[#e4e4e4] p-[20px] mt-[40px] rounded-md" onChange={(e)=>{
                        if(error!="") seterror("");
                        setdetails(()=>({...details,email:e.target.value}))
                    }}/>
                    <input type="text" placeholder="Password" className="w-full h-[40px] border-2 border-[#e4e4e4] p-[20px] mt-[40px] rounded-md" onChange={(e)=>{
                        if(error!="") seterror("");
                        setdetails(()=>({...details,password:e.target.value}))
                    }}/>
                    <input type="text" placeholder="Confirm Password" className="w-full h-[40px] border-2 border-[#e4e4e4] p-[20px] mt-[40px] rounded-md" onChange={(e)=>{
                        if(error!="") seterror("");
                        setdetails(()=>({...details,cnf:e.target.value}))
                    }}/>
                    <div className="w-full h-[10px] mt-[10px] px-[10px] text-[13px]"><p className="font-bold text-red-600 text-right">{error}</p></div>
                    <div className="w-full flex justify-center"><button className="border-2 border-black px-[7px] py-[3px] rounded-md font-bold mt-[30px]" onClick={createAccount}>Create Account</button></div>
                    <p className="text-center underline text-[13px] pt-[30px] cursor-pointer">Already have an account ? Login!</p>
                </div>
            </div>
    )
}