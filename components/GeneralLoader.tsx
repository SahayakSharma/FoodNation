import React from "react";

export default function GeneralLoader(){
    return(
        <div className="w-full h-screen">
            <div className="w-[50px] h-[50px] rounded-full flex items-center overflow-hidden justify-center bg-red-500 mx-auto mt-[200px]">
                <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white">
                    <div className="w-[20px] h-[50px] bg-white animate-spin"></div>
                </div>
            </div>
        </div>
    )
}