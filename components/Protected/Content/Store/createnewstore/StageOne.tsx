import React from "react";

export default function StageOne() {
    return (
        <div className="w-full h-[700px] py-[100px] px-[100px]">
            <p className="px-[10px] font-medium text-[30px]">Register Main Branch</p>
            <p className="px-[10px] text-[15px] pt-[70px]">Branch Name</p>
            <input type="text" value="Main Branch" className="w-full h-[70px] px-[20px] text-[20px] bg-[#f1f1f1] rounded-xl border-[1px] border-[#cecdcd]  cursor-not-allowed" disabled={true} />
            <div className="w-full flex justify-between mt-[50px]">
                <div className="w-[25%]">
                <span className="flex items-center"><p className="pl-[10px] text-[15px] pt-[20px]">City</p><p className="font-bold text-red-600 pt-[15px]">*</p></span>
                    <input type="text" className="w-full h-[70px] px-[20px] text-[20px] bg-[#f1f1f1] rounded-xl border-[1px] border-[#cecdcd]"/>
                </div>
                <div className="w-[25%]">
                <span className="flex items-center"><p className="pl-[10px] text-[15px] pt-[20px]">State</p><p className="font-bold text-red-600 pt-[15px]">*</p></span>
                    <input type="text" className="w-full h-[70px] px-[20px] text-[20px] bg-[#f1f1f1] rounded-xl border-[1px] border-[#cecdcd]"/>
                </div>
                <div className="w-[25%]">
                    <span className="flex items-center"><p className="pl-[10px] text-[15px] pt-[20px]">Pin Code</p><p className="font-bold text-red-600 pt-[15px]">*</p></span>
                    <input type="text" className="w-full h-[70px] px-[20px] text-[20px] bg-[#f1f1f1] rounded-xl border-[1px] border-[#cecdcd]"/>
                </div>
            </div>
            
        </div>
    )
}