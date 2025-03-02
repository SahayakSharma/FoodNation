import React, { useState } from "react";
import StageZero from "./StageZero";
import StageOne from "./StageOne";
import StageTwo from "./StageTwo";
import StageThree from "./StageThree";

export default function CreateNewStore(){
    const [stage,setstage]=useState<number>(0);
    return(
        <div className="w-full h-full">
            <div className="w-full h-[50px] flex items-center border-b-2 border-[#d6d6d6] px-[20px]">
                <p className="px-[15px] py-[3px] bg-[#d6d6d6] rounded-md font-medium cursor-pointer" style={{display:stage > 0 ? "block" :"none"}} onClick={()=>{
                    setstage(stage-1);
                }}>Previous</p>
            </div>
            {
                stage===0 ? <StageZero/> : stage===1 ? <StageOne/> : stage===2?<StageTwo/> : <StageThree/>
            }
            <div className="w-full h-[50px] flex justify-end items-center px-[20px]" style={{display:stage < 3 ? "flex" : "none"}}>
                <p className="px-[15px] py-[3px] bg-[#d6d6d6] rounded-md font-medium cursor-pointer" onClick={()=>{
                    setstage(stage+1)
                }}>Next</p>
            </div>
        </div>
    )
}