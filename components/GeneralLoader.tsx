import React from "react";

export default function GeneralLoader(){
    return(
        <div className="w-full h-screen">
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-red-500 mx-auto mt-[200px] animate-spin">
                <div className="w-[35px] h-[35px] rounded-full bg-white">
                    <div className="w-[30px] h-[30px] bg-white relative bottom-[0px] left-[25px]   rotate-45"></div>
                </div>
            </div>
        </div>
    )
}