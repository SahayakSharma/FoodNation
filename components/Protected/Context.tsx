import { useActiveState } from "@/context/activeContext";
import React from "react";


export default function Context(){

    const active=useActiveState();

    return(
        <div className="flex-1 text-black font-bold text-[50px]">
            
        </div>
    )
}