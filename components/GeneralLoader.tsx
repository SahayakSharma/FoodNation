import React from "react";

export default function GeneralLoader(){
    return(
        <div className="w-full h-screen">
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-red-500 mx-auto mt-[200px] animate-spin overflow-hidden">
                <div className="w-[30px] h-[30px] rounded-full bg-white">
                    <div className="w-[40px] h-[70px] bg-white relative bottom-[20px] left-[18px]"></div>
                </div>
            </div>
        </div>
    )
}