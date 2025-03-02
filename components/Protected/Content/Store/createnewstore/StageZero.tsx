import React from "react";

export default function StageZero(){
    return(
        <div className="w-full h-[700px] py-[100px] px-[300px]">
            <p className="px-[10px] font-bold text-[30px] text-center">Create New Store</p>
            <p className="text-[25px] font-light pt-[50px] px-[10px]">Store Name</p>
            <input type="text" spellCheck={false} className="w-full h-[70px] px-[20px] text-[20px] bg-[#f1f1f1] rounded-xl border-[1px] border-[#cecdcd] mt-[20px]" />
            <p className="text-[25px] font-light pt-[50px] px-[10px]">Owner Name</p>
            <input type="text" spellCheck={false} className="w-full h-[70px] px-[20px] text-[17px] bg-[#f1f1f1] rounded-xl border-[1px] border-[#cecdcd] mt-[20px]" />
        </div>
    )
}