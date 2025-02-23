'use client'
import StageOne from "@/components/Details/StageOne";
import StageTwo from "@/components/Details/StageTwo";
import React, { useState } from "react";

export default function Details(){
    const [stage,setstage]=useState<number>(0);
    return (
        <div className="w-full h-screen p-[100px]">
            {
                stage===0 ? <StageOne/> : <StageTwo/>
            }
        </div>
    )
}